const express = require("express");
const app = express();

const PORT = "1234";

app.get("/", async (req, res) => {
  res.write(`Hello from ${req.ip}:${req.socket.remotePort}\n`);
  res.write(`to ${req.socket.localAddress}:${PORT}\n`);

  res.end();
});

app.listen(1234, "0.0.0.0");
