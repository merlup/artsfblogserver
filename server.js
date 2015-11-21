var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/list', function (req, res) {
  res.json([{
  	id: 1,
  	name: 'test1'
  },{
  	id: 2,
  	name: 'test2'
  }]);
});

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});