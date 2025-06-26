#!/bin/bash

echo "🚀 Starting Micro Frontend Demo..."

# Function to start an application
start_app() {
    local name=$1
    local path=$2
    local port=$3
    
    echo "Starting $name on port $port..."
    cd "$path" && npm start &
    sleep 2
    cd - > /dev/null
}

# Start all applications
start_app "Container" "." "3000"
start_app "Header" "micro-frontends/header" "3001"
start_app "Content" "micro-frontends/content" "3002"
start_app "Footer" "micro-frontends/footer" "3003"

echo "✅ All applications started!"
echo ""
echo "🌐 Access the application at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop all applications"

# Wait for user to stop
wait 