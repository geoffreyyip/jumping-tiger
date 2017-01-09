const webpack = require('webpack');
const path = require('path');

/**
 * __dirname is current file directory
 * ./ is current working directory
 *
 * they're usually the same, but not always
 * they can differ if called from command line
 */
var DEV = path.resolve(__dirname, 'src');
var OUTPUT = path.resolve(__dirname, 'output');

/**
 * entry and output are required properties
 * entry tells webpack where to start its graph of dependencies
 * output tells webpack where to emit its bundle
 * module delegates per-file transformations to outside libraries
 * plugins act on "chunks" of files; uglify included by default
 */
var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
    ]
  }
};

module.exports = config;