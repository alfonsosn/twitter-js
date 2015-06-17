var express = require('express');
var app = express();
var morgan = require('morgan');


// connect Morgan to our app
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.get('/news', function(req, res) {
	res.send('these are the news');
})








var server = app.listen(3000, function () {

  // var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening upon', port);

});