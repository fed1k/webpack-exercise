const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: './dist/',
  plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
        template: './src/index.html'
      }),
  ],
  mode: 'production'
}