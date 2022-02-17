const express = require('express');
const app = express();
const server  = require('http').createServer(app);
const port = process.env.port || 80;

server.listen(port, () => {
  console.log(port);
})

app.get('/', (req, res, nxt) => {
  res.send('hello');
})

// app.use(express.static(__dirname + '/build'));


