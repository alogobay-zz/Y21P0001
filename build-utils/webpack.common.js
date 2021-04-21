const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('webpack path', path.resolve(__dirname, '../website', 'utils'));

module.exports = {
  entry: path.resolve(__dirname, '..', './website/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, '../website', 'utils'),
      // "@pages": path.resolve(__dirname, 'website', '.pages'),
      // "@components": path.resolve(__dirname, '..' ,'  ./website/components'),
      // "@": path.resolve(__dirname, '..', './website'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Advanced React with Webpack Setup',
      template: path.resolve(__dirname, '..', './website/index.html'),
    }),
  ],
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'bundle.js',
  },
};
