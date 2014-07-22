var express = require('express');
var app = express();

app.get('/mps', function(req, res) {
  res.send('Hello world');
});

var server = app.listen(9000, function() {
  console.log('Listening on port %d', server.address().port);
});
