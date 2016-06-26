// Setting up Express for template engine and routing the barebone
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + '/style.css');
});

app.get('/example-1/menu', (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + '/example-1' + '/menu.html');
});

app.get('/example-1/style.css', (req, res) => {
  console.log(req.url);
  res.sendFile(__dirname + '/example-1' + '/style.css');
});

app.listen(3000);
