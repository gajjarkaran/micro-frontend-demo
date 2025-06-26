const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Ensure output is configured properly
            webpackConfig.output = {
                ...webpackConfig.output,
                publicPath: 'auto',
            };

            // Add Module Federation plugin
            webpackConfig.plugins.push(
                new ModuleFederationPlugin({
                    name: 'container',
                    remotes: {
                        header: 'header@http://localhost:3001/remoteEntry.js',
                        content: 'content@http://localhost:3002/remoteEntry.js',
                        footer: 'footer@http://localhost:3003/remoteEntry.js',
                    },
                    shared: {
                        react: { singleton: true, requiredVersion: '^18.3.1' },
                        'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
                    },
                })
            );

            return webpackConfig;
        },
    },
}; 