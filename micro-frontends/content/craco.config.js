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
                    name: 'content',
                    filename: 'remoteEntry.js',
                    exposes: {
                        './Content': './src/Content',
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