#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple CSS minifier
function minifyCSS(css) {
    return css
        // Remove comments
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Remove extra whitespace
        .replace(/\s+/g, ' ')
        // Remove whitespace around selectors and properties
        .replace(/\s*{\s*/g, '{')
        .replace(/;\s*/g, ';')
        .replace(/:\s*/g, ':')
        .replace(/,\s*/g, ',')
        .replace(/}\s*/g, '}')
        // Remove trailing semicolons
        .replace(/;}/g, '}')
        // Trim
        .trim();
}

// Simple JavaScript minifier
function minifyJS(js) {
    return js
        // Remove single-line comments (be careful with URLs)
        .replace(/\/\/.*$/gm, '')
        // Remove multi-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Remove extra whitespace
        .replace(/\s+/g, ' ')
        // Remove whitespace around operators
        .replace(/\s*([{}();,=+\-*/<>!&|])\s*/g, '$1')
        // Trim
        .trim();
}

// Create optimized HTML
function optimizeHTML(html) {
    return html
        // Remove comments
        .replace(/<!--[\s\S]*?-->/g, '')
        // Remove extra whitespace between tags
        .replace(/>\s+</g, '><')
        // Remove extra whitespace
        .replace(/\s+/g, ' ')
        // Trim
        .trim();
}

// Build process
async function build() {
    console.log('🚀 Starting build process...');
    
    // Create dist directory
    const distDir = 'dist';
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
    }
    
    try {
        // Read source files
        console.log('📖 Reading source files...');
        const cssContent = fs.readFileSync('styles.css', 'utf8');
        const jsContent = fs.readFileSync('script.js', 'utf8');
        const htmlContent = fs.readFileSync('index.html', 'utf8');
        const manifestContent = fs.readFileSync('manifest.json', 'utf8');
        const swContent = fs.readFileSync('sw.js', 'utf8');
        
        // Minify CSS
        console.log('🎨 Minifying CSS...');
        const minifiedCSS = minifyCSS(cssContent);
        fs.writeFileSync(path.join(distDir, 'styles.min.css'), minifiedCSS);
        
        // Minify JavaScript
        console.log('⚡ Minifying JavaScript...');
        const minifiedJS = minifyJS(jsContent);
        fs.writeFileSync(path.join(distDir, 'script.min.js'), minifiedJS);
        
        // Minify Service Worker
        console.log('🔧 Minifying Service Worker...');
        const minifiedSW = minifyJS(swContent);
        fs.writeFileSync(path.join(distDir, 'sw.min.js'), minifiedSW);
        
        // Optimize HTML and update references
        console.log('📄 Optimizing HTML...');
        let optimizedHTML = htmlContent
            .replace('styles.css', 'styles.min.css')
            .replace('script.js', 'script.min.js')
            .replace('/sw.js', '/sw.min.js');
        
        optimizedHTML = optimizeHTML(optimizedHTML);
        fs.writeFileSync(path.join(distDir, 'index.html'), optimizedHTML);
        
        // Copy manifest
        console.log('📱 Copying manifest...');
        fs.writeFileSync(path.join(distDir, 'manifest.json'), manifestContent);
        
        // Calculate file sizes
        const originalSizes = {
            css: fs.statSync('styles.css').size,
            js: fs.statSync('script.js').size,
            html: fs.statSync('index.html').size,
            sw: fs.statSync('sw.js').size
        };
        
        const minifiedSizes = {
            css: fs.statSync(path.join(distDir, 'styles.min.css')).size,
            js: fs.statSync(path.join(distDir, 'script.min.js')).size,
            html: fs.statSync(path.join(distDir, 'index.html')).size,
            sw: fs.statSync(path.join(distDir, 'sw.min.js')).size
        };
        
        // Calculate savings
        const totalOriginal = Object.values(originalSizes).reduce((a, b) => a + b, 0);
        const totalMinified = Object.values(minifiedSizes).reduce((a, b) => a + b, 0);
        const savings = totalOriginal - totalMinified;
        const savingsPercent = ((savings / totalOriginal) * 100).toFixed(1);
        
        // Create performance report
        const report = {
            timestamp: new Date().toISOString(),
            originalSizes,
            minifiedSizes,
            savings: {
                bytes: savings,
                percentage: savingsPercent
            },
            recommendations: [
                'Enable gzip compression on your server',
                'Use a CDN for faster asset delivery',
                'Implement HTTP/2 for multiplexed connections',
                'Consider using WebP images for better compression',
                'Enable browser caching with proper cache headers'
            ]
        };
        
        fs.writeFileSync(path.join(distDir, 'performance-report.json'), JSON.stringify(report, null, 2));
        
        // Create .htaccess for Apache servers
        const htaccess = `# Performance optimizations
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>

# Enable browser caching
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</IfModule>`;
        
        fs.writeFileSync(path.join(distDir, '.htaccess'), htaccess);
        
        // Print results
        console.log('\n✅ Build completed successfully!');
        console.log('\n📊 Performance Report:');
        console.log(`   Original size: ${(totalOriginal / 1024).toFixed(1)} KB`);
        console.log(`   Minified size: ${(totalMinified / 1024).toFixed(1)} KB`);
        console.log(`   Savings: ${(savings / 1024).toFixed(1)} KB (${savingsPercent}%)`);
        
        console.log('\n📁 Generated files:');
        console.log(`   ${distDir}/index.html`);
        console.log(`   ${distDir}/styles.min.css`);
        console.log(`   ${distDir}/script.min.js`);
        console.log(`   ${distDir}/sw.min.js`);
        console.log(`   ${distDir}/manifest.json`);
        console.log(`   ${distDir}/performance-report.json`);
        console.log(`   ${distDir}/.htaccess`);
        
        console.log('\n🚀 Ready for deployment!');
        
    } catch (error) {
        console.error('❌ Build failed:', error.message);
        process.exit(1);
    }
}

// Run build if called directly
if (require.main === module) {
    build();
}

module.exports = { build, minifyCSS, minifyJS, optimizeHTML };