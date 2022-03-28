// Setup basic express server
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;
const cors = require("cors");

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});

app.use(cors({
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

io.on("connection", (socket) => {
  console.log("connected", socket.id);
});
