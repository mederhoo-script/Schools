#!/bin/bash

# Build script for School Marketing Site

echo "🏫 Building School Marketing Site..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Build CSS
echo "🎨 Building CSS..."
npm run build:css
echo ""

# Check file sizes
echo "📊 Build Stats:"
echo "  - CSS size: $(ls -lh site/css/styles.css | awk '{print $5}')"
echo "  - JS lines: $(wc -l < site/js/main.js) LOC"
echo ""

echo "✅ Build complete!"
echo ""
echo "To view the site:"
echo "  1. cd site"
echo "  2. python3 -m http.server 8000"
echo "  3. Open http://localhost:8000"
echo ""
