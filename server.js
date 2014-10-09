#!/usr/bin/env node

var app = require('./app');

app.set('port', 4002);

var server = app.listen(app.get('port'), function() {
  console.log('I am listening');
});