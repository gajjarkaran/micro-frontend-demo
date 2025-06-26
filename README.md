# 🚀 Micro Frontend Demo

A simple micro frontend application demonstrating Module Federation with React. This project consists of a container application that loads three independent micro frontends: Header, Content, and Footer.

## 📁 Project Structure

```
typing-test/
├── src/                    # Container application
│   ├── App.js             # Main container component
│   └── App.css            # Container styles
├── micro-frontends/
│   ├── header/            # Header micro frontend (Port 3001)
│   ├── content/           # Content micro frontend (Port 3002)
│   └── footer/            # Footer micro frontend (Port 3003)
├── package.json           # Container dependencies
└── craco.config.js        # Module Federation config
```

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Module Federation** - Micro frontend architecture
- **CRACO** - Create React App Configuration Override
- **Webpack 5** - Module bundler

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install container dependencies:**

   ```bash
   npm install
   ```

2. **Install micro frontend dependencies:**
   ```bash
   cd micro-frontends/header && npm install
   cd ../content && npm install
   cd ../footer && npm install
   ```

### Running the Application

You'll need to start all applications simultaneously. Open 4 terminal windows:

**Terminal 1 - Container (Port 3000):**

```bash
npm start
```

**Terminal 2 - Header (Port 3001):**

```bash
cd micro-frontends/header && npm start
```

**Terminal 3 - Content (Port 3002):**

```bash
cd micro-frontends/content && npm start
```

**Terminal 4 - Footer (Port 3003):**

```bash
cd micro-frontends/footer && npm start
```

### Access the Application

- **Container Application:** http://localhost:3000
- **Header Micro Frontend:** http://localhost:3001
- **Content Micro Frontend:** http://localhost:3002
- **Footer Micro Frontend:** http://localhost:3003

## 🏗️ Architecture Overview

### Container Application

- Acts as the shell application
- Loads micro frontends dynamically
- Manages the overall layout
- Handles routing and navigation

### Micro Frontends

Each micro frontend is completely independent:

**Header (Port 3001)**

- Navigation menu
- Brand/logo display
- Responsive design

**Content (Port 3002)**

- Main application content
- Interactive counter component
- Feature showcase

**Footer (Port 3003)**

- Contact information
- Social media links
- Copyright notice

## 🔧 Module Federation Configuration

### Container Configuration

```javascript
// craco.config.js
new ModuleFederationPlugin({
  name: "container",
  remotes: {
    header: "header@http://localhost:3001/remoteEntry.js",
    content: "content@http://localhost:3002/remoteEntry.js",
    footer: "footer@http://localhost:3003/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.3.1" },
    "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
  },
});
```

### Micro Frontend Configuration

```javascript
// Each micro frontend's craco.config.js
new ModuleFederationPlugin({
  name: "header", // or 'content', 'footer'
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/Header", // Component to expose
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.3.1" },
    "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
  },
});
```

## 🎯 Key Features

### ✅ Independent Development

- Each micro frontend can be developed independently
- Different teams can work on different parts
- Technology stack flexibility

### ✅ Independent Deployment

- Micro frontends can be deployed separately
- No need to coordinate releases
- Faster time-to-market

### ✅ Runtime Integration

- Components are loaded at runtime
- Dynamic loading with fallbacks
- Shared dependencies management

### ✅ Standalone Development

- Each micro frontend can run independently
- Easy testing and development
- Isolated development environment

## 🧪 Testing

### Individual Testing

Each micro frontend can be tested independently:

```bash
cd micro-frontends/header && npm test
cd micro-frontends/content && npm test
cd micro-frontends/footer && npm test
```

### Integration Testing

Test the complete application:

```bash
npm test
```

## 📦 Building for Production

### Build All Applications

```bash
# Container
npm run build

# Micro frontends
cd micro-frontends/header && npm run build
cd micro-frontends/content && npm run build
cd micro-frontends/footer && npm run build
```

## 🔍 Troubleshooting

### Common Issues

1. **Port Conflicts**

   - Ensure ports 3000-3003 are available
   - Check if other applications are running

2. **Module Federation Errors**

   - Clear browser cache
   - Restart all applications
   - Check network connectivity between ports

3. **Shared Dependencies**
   - Ensure React versions match across all applications
   - Check singleton configuration

### Debug Mode

Enable debug logging by adding to browser console:

```javascript
localStorage.setItem("debug", "webpack:*");
```

## 🚀 Next Steps

### Potential Enhancements

- Add routing between micro frontends
- Implement shared state management
- Add authentication and authorization
- Create shared component library
- Add TypeScript support
- Implement CI/CD pipelines

### Advanced Features

- Dynamic micro frontend loading
- A/B testing capabilities
- Performance monitoring
- Error boundaries
- Lazy loading optimization

## 📚 Resources

- [Module Federation Documentation](https://webpack.js.org/concepts/module-federation/)
- [CRACO Documentation](https://github.com/dilanx/craco)
- [Micro Frontends Architecture](https://micro-frontends.org/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Happy Coding! 🎉**
