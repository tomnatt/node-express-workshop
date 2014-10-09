var express = require('express');
var app = express();

/* middleware first - run top to bottom */

app.use(function(req, res, next) {
  console.log(req.url);
  // attach things to the request object to pass them on
  // careful you don't overwrite anything important!
  req.name = "Fred";
  next();
});

// if we give middleware a route it restricts it to that url
app.use('/foo', function(req, res, next) {
  console.log("foo url");
  req.name = "Bob";
  next();
});

/* routes (middleware which ends a request) */

app.get('/', function(req, res) {
  res.end('hello world ' + req.name);
});


app.get('/foo', function(req, res) {
  res.end('hello world ' + req.name);
});

module.exports = app;