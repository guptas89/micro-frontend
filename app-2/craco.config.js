const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: "http://localhost:3001/",
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
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
  },
};
