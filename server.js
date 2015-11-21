var express = require('express');
var app = express();

// Cross-Origin-Resource-Sharing (CORS)
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Homepage
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// API route(s)
app.get('/list', function (req, res) {
  res.json([{
  	id: 1,
  	name: 'test1'
  },{
  	id: 2,
  	name: 'test2'
  }]);
});
  
// Start the server
var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});