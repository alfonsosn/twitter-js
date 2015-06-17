var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank.js');


router.get('/', function (req, res) {
	var tweets = tweetBank.list();
    res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});


// catch req for userName
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log(list);
  res.render( 'index', { title: 'Twitter.js - Posts by '+ name, tweets: list } );
});


router.get( '/users/:name/tweet/:id', function (req, res) {
	var name = req.params.name;
	var id = req.params.id;
	var list = tweetBank.find( {id: id});
	res.render('index', {tweets: list});
});



module.exports = router;