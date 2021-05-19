const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 5200,
  },
  plugins: [
    new HTMLWebPackPlugin(
      {
        template: './src/index.html',
        filename: './index.html',
      },
    ),
  ],
};
