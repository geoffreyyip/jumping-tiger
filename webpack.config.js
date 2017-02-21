const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

/**
 * __dirname is current file directory
 * ./ is current working directory
 *
 * they're usually the same, but not always
 * they can differ if called from command line
 */
const DEV = path.resolve(__dirname, 'src');
const OUTPUT = path.resolve(__dirname, 'output');

/**
 * entry, output, module, and plugins are core webpack concepts
 * entry and output are required properties, entry tells webpack
 * where to start its graph of dependencies, and output tells webpack
 * where to emit its bundle
 *
 * module tells webpack what to do with individual files; usu. by
 * delegating to outside loaders
 *
 * plugins tells webpack how to transform chunks of files; uglify is
 * included by default and it deletes unused js code
 *
 * eslint property is specified for eslint-loader, it also watches for
 * changes during webpack-dev-server
 */
const config = {
  entry: `${DEV}/index.jsx`,
  output: {
    path: OUTPUT,
    filename: 'myCode.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.(js|jsx)$/, use: 'eslint-loader', enforce: 'pre' },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
};

module.exports = config;
