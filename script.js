// Timetable data based on your schedule
const timetable = {
    'Monday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'YouTube Content', type: 'youtube' },
        { time: '12:00', task: 'YouTube Content', type: 'youtube' },
        { time: '13:00', task: 'YouTube Content', type: 'youtube' },
        { time: '14:00', task: 'YouTube Content', type: 'youtube' },
        { time: '15:00', task: 'YouTube Content', type: 'youtube' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'YouTube Content', type: 'youtube' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Tuesday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'Appointments', type: 'appointments' },
        { time: '12:00', task: 'Appointments', type: 'appointments' },
        { time: '13:00', task: 'Appointments', type: 'appointments' },
        { time: '14:00', task: 'Appointments', type: 'appointments' },
        { time: '15:00', task: 'Appointments', type: 'appointments' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'Appointments', type: 'appointments' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Wednesday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'PODCASTING', type: 'podcast' },
        { time: '12:00', task: 'AI Coaching Calls', type: 'ai-cert' },
        { time: '13:00', task: 'PODCASTING', type: 'podcast' },
        { time: '14:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '15:00', task: 'ICF Coaching', type: 'coaching' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'AI Certification', type: 'ai-cert' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Thursday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'Appointments', type: 'appointments' },
        { time: '12:00', task: 'Appointments', type: 'appointments' },
        { time: '13:00', task: 'Appointments', type: 'appointments' },
        { time: '14:00', task: 'Appointments', type: 'appointments' },
        { time: '15:00', task: 'Appointments', type: 'appointments' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'Appointments', type: 'appointments' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Friday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'YouTube Scripting', type: 'youtube' },
        { time: '12:00', task: 'YouTube Scripting', type: 'youtube' },
        { time: '13:00', task: 'YouTube Scripting', type: 'youtube' },
        { time: '14:00', task: 'AI Coaching Calls', type: 'ai-cert' },
        { time: '15:00', task: 'AI Coaching Calls', type: 'ai-cert' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '19:30', task: 'YouTube Scripting', type: 'youtube' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Saturday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'Blogging', type: 'blog' },
        { time: '12:00', task: 'Blogging', type: 'blog' },
        { time: '13:00', task: 'YouTube Content', type: 'youtube' },
        { time: '14:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '15:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ],
    'Sunday': [
        { time: '10:30', task: 'Check Emails', type: 'admin' },
        { time: '11:00', task: 'Blogging', type: 'blog' },
        { time: '12:00', task: 'Blogging', type: 'blog' },
        { time: '13:00', task: 'YouTube Content', type: 'youtube' },
        { time: '14:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '15:00', task: 'AI Certification', type: 'ai-cert' },
        { time: '17:00', task: 'Meditation & Family', type: 'personal' },
        { time: '20:30', task: 'AI Product Idea', type: 'ai-product' }
    ]
};

// Goals data
const goals = {
    youtube: { current: 5, target: 60, deadline: '2025-12-05' },
    aiCert: { current: 15, target: 100, deadline: '2025-08-30' },
    aiProduct: { current: 25, target: 100, deadline: '2025-10-21' },
    podcast: { current: 0, target: 1, deadline: '2025-08-15' },
    blog: { current: 12, target: 400, deadline: '2025-11-30' }
};

// Daily goals based on current day
const dailyGoals = {
    'Monday': [
        { task: 'Create 3 YouTube video scripts', type: 'youtube', completed: false },
        { task: 'Record 3 YouTube videos', type: 'youtube', completed: false },
        { task: 'Work on AI Product features', type: 'ai-product', completed: false },
        { task: 'Respond to YouTube comments', type: 'youtube', completed: false }
    ],
    'Tuesday': [
        { task: 'Attend scheduled appointments', type: 'appointments', completed: false },
        { task: 'Work on AI Product development', type: 'ai-product', completed: false },
        { task: 'Follow up on client communications', type: 'appointments', completed: false }
    ],
    'Wednesday': [
        { task: 'Record podcast episode', type: 'podcast', completed: false },
        { task: 'Complete AI certification modules', type: 'ai-cert', completed: false },
        { task: 'Conduct AI coaching calls', type: 'ai-cert', completed: false },
        { task: 'ICF coaching session', type: 'coaching', completed: false },
        { task: 'Work on AI Product', type: 'ai-product', completed: false }
    ],
    'Thursday': [
        { task: 'Attend scheduled appointments', type: 'appointments', completed: false },
        { task: 'Work on AI Product development', type: 'ai-product', completed: false },
        { task: 'Prepare for tomorrow\'s content', type: 'youtube', completed: false }
    ],
    'Friday': [
        { task: 'Write YouTube scripts for next week', type: 'youtube', completed: false },
        { task: 'Conduct AI coaching calls', type: 'ai-cert', completed: false },
        { task: 'Work on AI Product features', type: 'ai-product', completed: false },
        { task: 'Plan weekend content', type: 'youtube', completed: false }
    ],
    'Saturday': [
        { task: 'Write 2-3 blog posts', type: 'blog', completed: false },
        { task: 'Create YouTube content', type: 'youtube', completed: false },
        { task: 'Study AI certification materials', type: 'ai-cert', completed: false },
        { task: 'Work on AI Product', type: 'ai-product', completed: false }
    ],
    'Sunday': [
        { task: 'Write 2-3 blog posts', type: 'blog', completed: false },
        { task: 'Create YouTube content', type: 'youtube', completed: false },
        { task: 'Study AI certification materials', type: 'ai-cert', completed: false },
        { task: 'Plan next week\'s schedule', type: 'admin', completed: false },
        { task: 'Work on AI Product', type: 'ai-product', completed: false }
    ]
};

// Weekly goals
const weeklyGoals = [
    { task: 'Upload 3 YouTube videos', type: 'youtube', completed: false },
    { task: 'Complete 5 hours of AI certification study', type: 'ai-cert', completed: false },
    { task: 'Record and publish 1 podcast episode', type: 'podcast', completed: false },
    { task: 'Write 10 blog posts', type: 'blog', completed: false },
    { task: 'Develop 2 new AI Product features', type: 'ai-product', completed: false },
    { task: 'Conduct 3 AI coaching calls', type: 'ai-cert', completed: false }
];

// Monthly goals
const monthlyGoals = [
    { task: 'Upload 12 YouTube videos', type: 'youtube', completed: false },
    { task: 'Complete 20% of AI certification', type: 'ai-cert', completed: false },
    { task: 'Record 4 podcast episodes', type: 'podcast', completed: false },
    { task: 'Write 40 blog posts', type: 'blog', completed: false },
    { task: 'Complete AI Product MVP milestone', type: 'ai-product', completed: false },
    { task: 'Conduct 12 AI coaching calls', type: 'ai-cert', completed: false }
];

// Performance optimization: Cache DOM elements
const domCache = {};

function cacheElement(id) {
    if (!domCache[id]) {
        domCache[id] = document.getElementById(id);
    }
    return domCache[id];
}

// Initialize dashboard with performance optimizations
function initDashboard() {
    // Cache all frequently accessed DOM elements
    const elementsToCache = [
        'current-time', 'current-date', 'current-week', 'current-task', 'next-task',
        'youtube-progress', 'youtube-current', 'ai-cert-progress', 'ai-cert-current',
        'ai-product-progress', 'ai-product-current', 'podcast-progress', 'podcast-current',
        'blog-progress', 'blog-current', 'daily-goals', 'weekly-goals', 'monthly-goals'
    ];
    
    elementsToCache.forEach(id => cacheElement(id));
    
    updateDateTime();
    updateCurrentTask();
    updateGoalsProgress();
    loadDailyGoals();
    loadWeeklyGoals();
    loadMonthlyGoals();
    
    // Optimized intervals - only update when necessary
    setInterval(updateDateTime, 60000);
    setInterval(updateCurrentTask, 60000);
}

// Optimized date and time update
function updateDateTime() {
    const now = new Date();
    
    // Use cached elements for better performance
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
    });
    cacheElement('current-time').textContent = timeString;
    
    const dateString = now.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    cacheElement('current-date').textContent = dateString;
    
    const weekNumber = getWeekNumber(now);
    cacheElement('current-week').textContent = `Week ${weekNumber}`;
}

// Optimized week number calculation
function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// Optimized current task update
function updateCurrentTask() {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    const todaySchedule = timetable[currentDay] || [];
    
    let currentTask = null;
    let nextTask = null;
    
    // Optimized loop with early exit
    for (let i = 0; i < todaySchedule.length; i++) {
        const taskTime = parseInt(todaySchedule[i].time.replace(':', ''));
        
        if (currentTime >= taskTime) {
            currentTask = todaySchedule[i];
            nextTask = todaySchedule[i + 1] || null;
        } else {
            if (!currentTask) {
                nextTask = todaySchedule[i];
            }
            break;
        }
    }
    
    // Use cached elements for better performance
    const currentTaskElement = cacheElement('current-task');
    const nextTaskElement = cacheElement('next-task');
    
    currentTaskElement.textContent = currentTask 
        ? `${currentTask.time} - ${currentTask.task}`
        : 'No current task scheduled';
    
    nextTaskElement.textContent = nextTask
        ? `${nextTask.time} - ${nextTask.task}`
        : 'No more tasks today';
}

// Optimized goals progress update
function updateGoalsProgress() {
    // YouTube
    const youtubePercent = Math.round((goals.youtube.current / goals.youtube.target) * 100);
    cacheElement('youtube-progress').style.width = youtubePercent + '%';
    cacheElement('youtube-current').textContent = goals.youtube.current;
    
    // AI Certification
    cacheElement('ai-cert-progress').style.width = goals.aiCert.current + '%';
    cacheElement('ai-cert-current').textContent = goals.aiCert.current;
    
    // AI Product
    cacheElement('ai-product-progress').style.width = goals.aiProduct.current + '%';
    cacheElement('ai-product-current').textContent = goals.aiProduct.current;
    
    // Podcast
    const podcastPercent = goals.podcast.current > 0 ? 100 : 0;
    cacheElement('podcast-progress').style.width = podcastPercent + '%';
    cacheElement('podcast-current').textContent = goals.podcast.current;
    
    // Blog
    const blogPercent = Math.round((goals.blog.current / goals.blog.target) * 100);
    cacheElement('blog-progress').style.width = blogPercent + '%';
    cacheElement('blog-current').textContent = goals.blog.current;
}

// Optimized goal rendering with document fragment
function renderGoals(goals, containerId) {
    const container = cacheElement(containerId);
    const fragment = document.createDocumentFragment();
    
    goals.forEach((goal, index) => {
        const goalDiv = document.createElement('div');
        goalDiv.className = `goal-item ${goal.type} ${goal.completed ? 'completed' : ''}`;
        
        goalDiv.innerHTML = `
            <input type="checkbox" ${goal.completed ? 'checked' : ''} 
                   onchange="toggleGoal('${containerId}', ${index})">
            <span>${goal.task}</span>
        `;
        
        fragment.appendChild(goalDiv);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
}

// Load daily goals
function loadDailyGoals() {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todayGoals = dailyGoals[today] || [];
    renderGoals(todayGoals, 'daily-goals');
}

// Load weekly goals
function loadWeeklyGoals() {
    renderGoals(weeklyGoals, 'weekly-goals');
}

// Load monthly goals
function loadMonthlyGoals() {
    renderGoals(monthlyGoals, 'monthly-goals');
}

// Optimized tab switching with event delegation
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');
    
    tabContents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const selectedContent = document.getElementById(`${tabName}-content`);
    const selectedTab = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    
    if (selectedContent) selectedContent.classList.add('active');
    if (selectedTab) selectedTab.classList.add('active');
}

// Toggle goal completion
function toggleGoal(containerId, goalIndex) {
    let goalArray;
    
    switch(containerId) {
        case 'daily-goals':
            const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
            goalArray = dailyGoals[today];
            break;
        case 'weekly-goals':
            goalArray = weeklyGoals;
            break;
        case 'monthly-goals':
            goalArray = monthlyGoals;
            break;
    }
    
    if (goalArray && goalArray[goalIndex]) {
        goalArray[goalIndex].completed = !goalArray[goalIndex].completed;
        
        // Re-render only the affected container
        renderGoals(goalArray, containerId);
        
        // Save to localStorage for persistence
        localStorage.setItem('goalTracker', JSON.stringify({
            dailyGoals,
            weeklyGoals,
            monthlyGoals
        }));
    }
}

// Load saved progress from localStorage
function loadSavedProgress() {
    const saved = localStorage.getItem('goalTracker');
    if (saved) {
        const data = JSON.parse(saved);
        Object.assign(dailyGoals, data.dailyGoals || {});
        Object.assign(weeklyGoals, data.weeklyGoals || []);
        Object.assign(monthlyGoals, data.monthlyGoals || []);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadSavedProgress();
    initDashboard();
});

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}
