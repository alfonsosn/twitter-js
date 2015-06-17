//I'm adding a commit in the first line.


var express = require('express');
var app = express();
var morgan = require('morgan');
var swig = require('swig');



// connect Morgan to our app
app.use(morgan('dev'));

app.engine('html', swig.renderFile);

// set default engine to HTML
app.set('view engine', 'html');

// set views path to our view folder
app.set('views', process.cwd() + '/views');

// turn off caching
swig.setDefaults({ cache: false });





// app.get('/', function (req, res) {
//   // res.send('hello, world!')
//   var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// })

// app.get('/news', function(req, res) {
// 	res.send('these are the news');
// })








var server = app.listen(3000, function () {

  // var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening upon', port);

});