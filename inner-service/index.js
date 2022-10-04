const express = require("express");
const app = express();

const PORT = "1234";

app.get("/", async (req, res) => {
  res.write(`Hello from ${req.socket.localAddress}:${req.socket.remotePort}\n`);
  res.write(`to ${req.socket.remoteAddress}:${PORT}\n`);

  res.end();
});

app.listen(1234, "0.0.0.0");
