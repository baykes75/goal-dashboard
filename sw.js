const CACHE_NAME = 'goal-tracker-v1.2';
const STATIC_CACHE = 'static-v1.2';
const DYNAMIC_CACHE = 'dynamic-v1.2';

// Files to cache immediately
const STATIC_FILES = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json'
];

// Cache strategies
const CACHE_STRATEGIES = {
    // Cache first, then network (for static assets)
    CACHE_FIRST: 'cache-first',
    // Network first, then cache (for dynamic content)
    NETWORK_FIRST: 'network-first',
    // Cache only (for offline-first)
    CACHE_ONLY: 'cache-only',
    // Network only (for real-time data)
    NETWORK_ONLY: 'network-only'
};

// Install event - cache static files
self.addEventListener('install', event => {
    console.log('[SW] Installing service worker...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('[SW] Caching static files');
                return cache.addAll(STATIC_FILES);
            })
            .then(() => {
                console.log('[SW] Static files cached successfully');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('[SW] Failed to cache static files:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating service worker...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[SW] Service worker activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - handle requests with appropriate caching strategy
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip chrome-extension and other non-http requests
    if (!request.url.startsWith('http')) {
        return;
    }
    
    // Determine caching strategy based on request type
    if (isStaticAsset(request)) {
        event.respondWith(handleStaticAsset(request));
    } else if (isApiRequest(request)) {
        event.respondWith(handleApiRequest(request));
    } else {
        event.respondWith(handleGenericRequest(request));
    }
});

// Check if request is for static assets
function isStaticAsset(request) {
    const url = new URL(request.url);
    const staticExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2'];
    return staticExtensions.some(ext => url.pathname.endsWith(ext)) || 
           STATIC_FILES.includes(url.pathname);
}

// Check if request is for API
function isApiRequest(request) {
    const url = new URL(request.url);
    return url.pathname.startsWith('/api/') || 
           url.pathname.includes('api');
}

// Handle static assets with cache-first strategy
async function handleStaticAsset(request) {
    try {
        // Try cache first
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            console.log('[SW] Serving from cache:', request.url);
            return cachedResponse;
        }
        
        // If not in cache, fetch from network and cache
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(STATIC_CACHE);
            console.log('[SW] Caching static asset:', request.url);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.error('[SW] Static asset fetch failed:', error);
        
        // Try to serve from cache as fallback
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // Return offline fallback for HTML requests
        if (request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
        }
        
        throw error;
    }
}

// Handle API requests with network-first strategy
async function handleApiRequest(request) {
    try {
        // Try network first
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            // Cache successful API responses
            const cache = await caches.open(DYNAMIC_CACHE);
            console.log('[SW] Caching API response:', request.url);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.log('[SW] Network failed, trying cache:', request.url);
        
        // Fallback to cache
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            console.log('[SW] Serving API from cache:', request.url);
            return cachedResponse;
        }
        
        throw error;
    }
}

// Handle generic requests
async function handleGenericRequest(request) {
    try {
        // For HTML requests, try network first
        if (request.headers.get('accept').includes('text/html')) {
            try {
                const networkResponse = await fetch(request);
                return networkResponse;
            } catch (error) {
                // Fallback to cached HTML
                const cachedResponse = await caches.match('/index.html');
                if (cachedResponse) {
                    return cachedResponse;
                }
                throw error;
            }
        }
        
        // For other requests, try cache first
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // Fallback to network
        return await fetch(request);
    } catch (error) {
        console.error('[SW] Generic request failed:', error);
        throw error;
    }
}

// Background sync for offline actions
self.addEventListener('sync', event => {
    console.log('[SW] Background sync triggered:', event.tag);
    
    if (event.tag === 'goal-sync') {
        event.waitUntil(syncGoalData());
    }
});

// Sync goal data when back online
async function syncGoalData() {
    try {
        // Get pending data from IndexedDB or localStorage
        const pendingData = await getPendingGoalData();
        
        if (pendingData && pendingData.length > 0) {
            console.log('[SW] Syncing goal data:', pendingData.length, 'items');
            
            // Send data to server
            for (const data of pendingData) {
                try {
                    await fetch('/api/goals', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    
                    // Remove from pending queue
                    await removePendingGoalData(data.id);
                } catch (error) {
                    console.error('[SW] Failed to sync goal data:', error);
                }
            }
        }
    } catch (error) {
        console.error('[SW] Background sync failed:', error);
    }
}

// Helper functions for goal data management
async function getPendingGoalData() {
    // This would typically use IndexedDB
    // For now, return empty array
    return [];
}

async function removePendingGoalData(id) {
    // Remove from IndexedDB
    console.log('[SW] Removing synced data:', id);
}

// Push notification handling
self.addEventListener('push', event => {
    console.log('[SW] Push notification received');
    
    const options = {
        body: 'Time to check your goals!',
        icon: '/icon-192.png',
        badge: '/badge-72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 'goal-reminder'
        },
        actions: [
            {
                action: 'view',
                title: 'View Goals',
                icon: '/icon-view.png'
            },
            {
                action: 'dismiss',
                title: 'Dismiss',
                icon: '/icon-dismiss.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('Goal Tracker', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    console.log('[SW] Notification clicked:', event.action);
    
    event.notification.close();
    
    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Message handling from main thread
self.addEventListener('message', event => {
    console.log('[SW] Message received:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CACHE_GOAL_DATA') {
        cacheGoalData(event.data.payload);
    }
});

// Cache goal data for offline use
async function cacheGoalData(data) {
    try {
        const cache = await caches.open(DYNAMIC_CACHE);
        const response = new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        await cache.put('/api/goals-cache', response);
        console.log('[SW] Goal data cached for offline use');
    } catch (error) {
        console.error('[SW] Failed to cache goal data:', error);
    }
}

// Performance monitoring
self.addEventListener('fetch', event => {
    if (event.request.url.includes('analytics')) {
        // Track performance metrics
        const startTime = performance.now();
        
        event.waitUntil(
            fetch(event.request).then(response => {
                const endTime = performance.now();
                const duration = endTime - startTime;
                
                console.log('[SW] Request duration:', duration, 'ms for', event.request.url);
                
                return response;
            })
        );
    }
});

console.log('[SW] Service worker script loaded');