// var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    libs: [
      '../js/lib/zepto.js',
      '../js/base-debug.js',
      './src/assets/md5.js',
      './src/assets/ticket_name_v3.js',
      './src/assets/mask_mobile.js'
    ],
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8888',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output: {
    // publicPath: '/webapp/eticket/static/',
    publicPath: 'http://127.0.0.1:8888/static/',
    // path: path.resolve(__dirname, './static'),
    path: './static',
    filename: '[name].js'
  },
  // resolveLoader: {
  //   root: path.join(__dirname, 'node_modules'),
  // },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    port: 8888,
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]);
}