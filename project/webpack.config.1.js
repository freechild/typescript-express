const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

console.log(path.resolve(__dirname, 'src'));

const config = {
  context: path.resolve(__dirname, 'src'),
  watch: true,
  
  entry:{
    'content/common/js/vendor': ['babel-polyfill','react', 'react-dom','react-router-dom'],
    'content/common/js/app': ['react-hot-loader/patch',"./content/app.js"],
  },

  module: {
    rules: [
      
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.bundle\.js$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: 'my-chunk'
          }
        }
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|woff|woff2|eot)$/,
        use: {
          loader: 'url-loader?limit=100000&name=./[name]/[hash].[ext]',
          options: { publicPath:'../', },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test:/\.pug$/,
        use:"pug-html-loader"
      },
      
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: 'content/common/js/[name].[chunkhash].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  
  plugins: [
    // Add scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'content/common/js/vendor',
    }),
    new webpack.NormalModuleReplacementPlugin(
      /^pages$/,
      './pages/index.async'
  ),
    // new HtmlWebpackPlugin({
    //   template: "./content/index.html",
    //   filename: "index.html"
    // }),
    
  ],
  devServer: {
    hot:true,
    filename: 'bundle.js',
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    proxy: {
      "**": "http://localhost:3000"
    }
  }
};


if (process.env.NODE_ENV === 'production') {
  config.output.filename = '[name].[chunkhash].js';
  config.plugins = [
    ...config.plugins,
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    }),
  ];
}




module.exports = config;
