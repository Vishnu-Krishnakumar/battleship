// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/javascript/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/index.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};


// const path = require('path');
// // import path from {"path"}

// module.exports = {

//     // Path to your entry point. From this file Webpack will begin its work
//     entry: './src/javascript/index.js',
//     target: 'web',
//     devServer: {
//         liveReload: true,
//         historyApiFallback: true,
//         port: 8080,
//         headers: {
//           'Content-Security-Policy': "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
//         }
        
//       },
//     // Path and filename of your result bundle.
//     // Webpack will bundle all JavaScript into this file
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       publicPath: '/dist',
//       filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules)/,
//                 use: {
//                   loader: 'babel-loader',
//                   options: {
//                     presets: ['@babel/preset-env']
//                   }
//                 }
//               }
//         ]
//       },      
//     // Default mode for Webpack is production.
//     // Depending on mode Webpack will apply different things
//     // on the final bundle. For now, we don't need production's JavaScript 
//     // minifying and other things, so let's set mode to development
//     mode: 'development'
    
    
//   };