# 🚀 Local Setup Guide - Goal Tracker Dashboard

## 📋 Quick Setup Instructions

### Step 1: Get the Optimized Code

The performance-optimized code is in the branch `cursor/optimize-codebase-for-performance-3686`. Here's how to get it on your local machine:

```bash
# Clone or update your repository
git clone https://github.com/baykes75/goal-dashboard.git
cd goal-dashboard

# Switch to the optimized branch
git checkout cursor/optimize-codebase-for-performance-3686

# OR if you already have the repo locally:
git fetch origin
git checkout cursor/optimize-codebase-for-performance-3686
git pull origin cursor/optimize-codebase-for-performance-3686
```

### Step 2: Run Locally

You have several options to run the dashboard locally:

#### Option A: Using Python (Recommended)
```bash
# For development version
python3 -m http.server 8000
# OR python -m http.server 8000 (Windows)

# Open: http://localhost:8000
```

#### Option B: Using Node.js
```bash
# Install dependencies (optional, for build tools)
npm install -g http-server

# Run development version
http-server . -p 8000

# Open: http://localhost:8000
```

#### Option C: Using the NPM Scripts
```bash
# Development server
npm run dev

# Build optimized version
npm run build

# Serve optimized version
npm run serve
```

### Step 3: Build Optimized Version

To create the performance-optimized production build:

```bash
# Create optimized build
node build.js

# Or using npm
npm run build

# Serve the optimized version
python3 -m http.server 8001 --directory dist
# Open: http://localhost:8001
```

## 🌐 URLs for Testing

Once running locally, you can access:

- **📋 Development**: http://localhost:8000 (original version)
- **🚀 Production**: http://localhost:8001 (optimized version)

## 🔧 Troubleshooting

### Python Not Found
**Windows:**
- Install Python from https://python.org
- Make sure "Add to PATH" is checked during installation

**Mac:**
- Python3 should be pre-installed
- If not: `brew install python3`

**Linux:**
- `sudo apt update && sudo apt install python3` (Ubuntu/Debian)
- `sudo yum install python3` (CentOS/RHEL)

### Port Already in Use
```bash
# Kill existing server
pkill -f "python3 -m http.server"

# Or use different port
python3 -m http.server 8080
```

### Node.js Issues
If you want to use the build system:
```bash
# Install Node.js from https://nodejs.org
# Then run:
npm install  # (optional, no dependencies needed)
```

## 📱 Testing the Optimizations

### Performance Comparison
1. **Open both versions** (localhost:8000 and localhost:8001)
2. **DevTools (F12)** → **Network** tab
3. **Clear cache** and reload both
4. **Compare**:
   - Bundle sizes (31.4% reduction!)
   - Load times
   - Number of requests

### PWA Features
1. **Visit http://localhost:8001** in Chrome/Edge
2. **Look for install button** in address bar
3. **Install as app** for desktop/mobile experience
4. **Test offline**: DevTools → Network → Offline → Reload

### Mobile Testing
1. **DevTools** → **Device Toolbar** (Ctrl+Shift+M)
2. **Test different screen sizes**
3. **Verify responsive design**

## 🐛 Common Issues

### "Access Denied" or Permission Issues
```bash
# Try different port
python3 -m http.server 8080

# Or run from user directory
cd ~/Desktop
git clone https://github.com/baykes75/goal-dashboard.git
cd goal-dashboard
python3 -m http.server 8000
```

### Browser Cache Issues
- **Hard refresh**: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- **Clear browser data**: DevTools → Application → Storage → Clear site data

### Firewall Blocking
- **Windows**: Allow Python through Windows Firewall
- **Mac**: System Preferences → Security & Privacy → Firewall
- **Alternative**: Use 127.0.0.1:8000 instead of localhost:8000

## 📊 What You'll See

### Performance Improvements
- **31.4% smaller bundle** (45.4KB → 31.1KB)
- **Faster loading** times
- **Smooth animations**
- **Better responsiveness**

### New Features
- **Offline functionality**
- **PWA installation**
- **Enhanced accessibility**
- **Mobile optimization**
- **Service Worker caching**

## 🔄 Merging to Main Branch

Once you've tested and are happy with the optimizations:

```bash
# Switch to main branch
git checkout main

# Merge the optimized changes
git merge cursor/optimize-codebase-for-performance-3686

# Push to GitHub
git push origin main

# Clean up branch (optional)
git branch -d cursor/optimize-codebase-for-performance-3686
git push origin --delete cursor/optimize-codebase-for-performance-3686
```

## 📁 File Structure

After setup, you'll have:
```
goal-dashboard/
├── index.html              # Optimized HTML
├── styles.css              # Enhanced CSS
├── script.js               # Performance-optimized JS
├── sw.js                   # Service Worker
├── manifest.json           # PWA Manifest
├── build.js                # Build system
├── package.json            # NPM configuration
├── dist/                   # Production build
│   ├── index.html          # Minified HTML
│   ├── styles.min.css      # Minified CSS (6.1KB)
│   ├── script.min.js       # Minified JS (12.1KB)
│   ├── sw.min.js           # Minified Service Worker
│   └── performance-report.json
├── README.md               # Full documentation
├── PREVIEW_GUIDE.md        # Testing instructions
└── LOCAL_SETUP.md          # This file
```

## 🎯 Next Steps

1. **Clone/checkout** the optimized branch
2. **Run locally** using Python server
3. **Test both versions** (development vs production)
4. **Try PWA features** (install, offline mode)
5. **Run Lighthouse audit** for performance scores
6. **Merge to main** when satisfied

## 📞 Support

If you encounter issues:
1. **Check the console** for error messages
2. **Try incognito mode** to avoid cache issues
3. **Use different ports** if 8000/8001 are busy
4. **Ensure Python 3** is installed and accessible

---

**Enjoy your high-performance Goal Tracker Dashboard! 🎉**