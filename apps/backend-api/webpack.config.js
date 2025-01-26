const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '../../dist/apps/backend-api'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    }),
  ],
};
