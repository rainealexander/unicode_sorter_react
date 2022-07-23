const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.PROJECT_MODE,
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { "targets": "defaults" }],
            '@babel/preset-react'
          ]
        }
      }]
    },
    {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader"
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })]
};
