const path = require("path");

module.exports = {
  entry: "./client.js",
  target: "web",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.js",
  },
};
