const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    index: "./src/js/index.js",
    m: "./src/js/m.js"
  },
  output: {
    path: path.resolve(process.cwd(), "./dist"),
    filename: "[name]_[hash:6].js",
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "src/index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "src/m.html"),
      filename: "m.html",
      chunks: ["m"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:6].css",
    }),
  ]
}

module.exports = config