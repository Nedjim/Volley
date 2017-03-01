var express = require('express');
var application = require('./routes/app');

var app = express();

app.use('/app', application);

app.listen('3000');

console.log('APP is ready');