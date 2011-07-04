var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));

var browserify = require('browserify');
app.use(browserify({ entry : 'main.js' }));
app.use(require('progressify'));

app.listen(8080);
console.log('Listening on :8080');
