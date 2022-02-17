const express = require('express');
const app = express();
const server  = require('http').createServer(app);
const port = process.env.port || 8080;

server.listen(port, () => {
  console.log(port);
})

// app.use(express.static(__dirname + '/build'));


