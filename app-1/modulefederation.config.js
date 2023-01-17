module.exports = {
  name: "app1",
  filename: "remoteEntry.js",
  remotes: {
    app2: "app2@http://localhost:3001/remoteEntry.js",
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    "react-dom": {
      singleton: true,
      eager: true,
    },
  },
};
