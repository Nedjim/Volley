//Dependencies
var express = require('express');
var router = express.Router();

//Transfere au fichier index.html
router.get('/', function(req, res, next){
    res.render('index', {title: 'FFVB'});
});

module.exports = router;