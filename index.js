//Dependencies
var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;

var home = require('./routes/home');
var practice = require('./routes/practice');
var frenchTeam = require('./routes/frenchTeam');
var competitions = require('./routes/competitions');
var contact = require('./routes/contact');

var app = express();

app.set('view engine','jade');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use('/', home);

app.use('/pratiquer', practice);
app.use('/equipesfr', frenchTeam);
app.use('/competitions', competitions);
app.use('/contact', contact);

app.listen(port);
console.log('Port'+ port);