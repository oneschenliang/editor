const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./editor/index.ts",
  target: "web",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "editor.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "editor/index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // include: path.join(__dirname, 'src/static/css'),
        use: [
          {
            loader: "style-loader",
            options: { attributes: { class: "editor-style-css" } },
          },
          {
            loader: "css-loader",
            options: {
              modules: false,
              // namedExport: false,
            },
          },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    host: "127.0.0.1",
    port: 7001,
    open: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      const port = devServer.server.address().port;
      console.log('Listening on port:', port);
    },
  },
};
