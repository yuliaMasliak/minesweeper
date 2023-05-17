const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './minesweeper/src/index.js',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'minesweeper', 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: '',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
              esModule: false,
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new FaviconsWebpackPlugin({
      logo: './minesweeper/src/assets/favicon-32x32.png',
      favicons: {
        appName: 'my-app',
        appDescription: 'My awesome App',
        developerName: 'Me',
        developerURL: null,
        icons: {
          coast: false,
          yandex: false,
        },
      },
    }),
  ],
  watch: true,
};
