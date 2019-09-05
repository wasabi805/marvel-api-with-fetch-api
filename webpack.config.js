const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const merge = require("webpack-merge");
var path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const common ={
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },

      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },

      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      }
    ]
  },

  plugins: [htmlPlugin],

  //enable recompile : https://stackoverflow.com/a/45655104
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }

};

const development = {
  devServer: {
    historyApiFallback: true,

    //https://github.com/saikat/react-apollo-starter-kit/issues/20#issuecomment-316651403
    proxy: {
      "*": "http://[::1]:5000",
      secure: false,
      changeOrigin: true,

    },
    port: 3000
  }
};


module.exports = (env, argv) => {
  let config = common;
  if (argv.mode === "development") {
    config = merge([common, development]);
  }

  return config;
};


