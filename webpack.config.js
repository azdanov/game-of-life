const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  context: __dirname,

  entry: ['./src/index.js'],

  devtool:
    process.env.NODE_ENV === 'development' ? 'cheap-source-map' : 'source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
  },

  resolve: {
    extensions: ['.js', '.json'],
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new CleanWebpackPlugin('dist')],
};

module.exports = config;
