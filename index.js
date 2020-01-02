"use strict"

var express = require('express');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.set('port',(process.env.PORT || 5000))
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send("Home page. Server running okay.");
});

app.get('/webhook', function(req, res) {
  if (req.query['hub.verify_token'] === 'ma_xac_minh_cua_ban') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
});
app.listen(app.get('port'), function() {
  console.log("Chat bot server listening ");
});