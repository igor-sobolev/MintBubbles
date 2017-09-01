require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and
  // `src` is source
  entry: {
    app: './index.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    publicPath: '/assets',
    filename: 'mint-bubbles.js',
  },
  devServer: {
    open: true, // to open the local server in browser
    contentBase: __dirname + '/src',
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-es2015'].map(require.resolve)
        }
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader', ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader' //JSON loader
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      }
    ]
  },
  devtool: 'eval-source-map', // Default development sourcemap
  plugins: [
    new HtmlWebpackPlugin({ // Also generate a test.html
      filename: 'index.html',
      template: '../examples/default.html'
    })
  ]
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map';
}

module.exports = config;