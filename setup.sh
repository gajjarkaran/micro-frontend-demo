#!/bin/bash

echo "🚀 Setting up Micro Frontend Demo..."

# Install container dependencies
echo "📦 Installing container dependencies..."
npm install

# Install micro frontend dependencies
echo "📦 Installing header micro frontend dependencies..."
cd micro-frontends/header && npm install && cd ../..

echo "📦 Installing content micro frontend dependencies..."
cd micro-frontends/content && npm install && cd ../..

echo "📦 Installing footer micro frontend dependencies..."
cd micro-frontends/footer && npm install && cd ../..

echo "✅ Setup complete!"
echo ""
echo "🎯 To run the application, you need to start all services:"
echo ""
echo "Terminal 1 (Container - Port 3000):"
echo "  npm start"
echo ""
echo "Terminal 2 (Header - Port 3001):"
echo "  cd micro-frontends/header && npm start"
echo ""
echo "Terminal 3 (Content - Port 3002):"
echo "  cd micro-frontends/content && npm start"
echo ""
echo "Terminal 4 (Footer - Port 3003):"
echo "  cd micro-frontends/footer && npm start"
echo ""
echo "🌐 Access the application at: http://localhost:3000" 