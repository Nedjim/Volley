//Dependencies
var express = require('express');
var path = require('path');
var home = require('./routes/home');
var practice = require('./routes/practice');
var frenchTeam = require('./routes/frenchTeam');
var competitions = require('./routes/competitions');
var contact = require('./routes/contact');
//application express
var app = express();

//config : jade, dossiers view
app.set('view engine','jade');
app.set('views', path.join(__dirname, 'views'));
//dossier static
app.use(express.static('public'));

//Lien vers home.js
app.use('/', home);
app.use('/pratiquer', practice);
app.use('/equipesfr', frenchTeam);
app.use('/competitions', competitions);
app.use('/contact', contact);

//Port d'écoute
app.listen('3000');
console.log('Port 3000');