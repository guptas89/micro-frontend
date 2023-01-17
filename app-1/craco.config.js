const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
  babel: {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    },
  },
};
