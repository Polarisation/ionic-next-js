const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const withTM = require('next-transpile-modules')([
	'@ionic/react',
	'@ionic/core',
	'@stencil/core',
	'ionicons',
]);

module.exports = withTM({
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join(
              __dirname,
              'node_modules/ionicons/dist/ionicons/svg'
            ),
            to: path.join(__dirname, 'public/svg'),
          },
        ],
      })
    )
    return config
  },
});
