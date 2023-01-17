module.exports = {
  name: "app2",
  filename: "remoteEntry.js",
  exposes: {
    "./TicketList": "./src/components/TicketList",
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
