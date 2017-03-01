var express = require('express');
var router = express.Router();

router.get('/presentation', function(req, res){
    res.send('Fichier App.js');
});

module.exports = router;