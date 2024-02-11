const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    background: './src/background.js',
    popup: './src/popup/popup.js',
    content: './src/content.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [
        { from: 'manifest.json', to: 'manifest.json' },
        { from: 'src/popup/popup.html', to: 'popup.html' },
      ],
    }),
  ],
};
