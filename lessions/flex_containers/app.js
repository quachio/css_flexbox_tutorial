// Setting up Express for template engine and routing the barebone
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css');
});

app.listen(3000);
