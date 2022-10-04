const express = require("express");
const app = express();
const os = require("os");

const PORT = "8001";

app.get("/", async (req, res) => {
  // Request inner service

  res.write(`Hello from ${req.socket.localAddress}:${req.socket.remotePort}\n`);
  res.write(`to ${req.socket.remoteAddress}:${PORT}\n`);

  const response = await fetch("http://inner-service:1234/");
  const text = await response.text();

  res.write(text);

  res.end();
});

app.listen(PORT);
