var express = require('express');
var app = express();


var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

var Art = mongoose.model('Art', { 
  name: String,
  url: String
});


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
  Art.find({},function(err, results){
    if(err){
      console.error(err);
      return res.send(err);
    }

    res.json(results);

  });
  // res.json([{
  // 	id: 1,
  // 	name: 'test1',
  //   url: 'http://www.artsfblog.com/uploads/4/9/9/3/49933823/s738677920177686506_p120_i1_w640.jpeg'
  // },{
  // 	id: 2,
  // 	name: 'test2',
  //   url: 'http://www.artsfblog.com/uploads/4/9/9/3/49933823/s738677920177686506_p121_i1_w561.jpeg'
  // },{
  //   id: 3,
  //   name: 'test3',
  //   url: 'http://www.artsfblog.com/uploads/4/9/9/3/49933823/s738677920177686506_p118_i1_w640.jpeg'
  // },{
  //   id: 4,
  //   name: 'test4',
  //   url: 'http://www.artsfblog.com/uploads/4/9/9/3/49933823/s738677920177686506_p122_i1_w640.jpeg'
  // }]);
});
  
// Start the server
var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});