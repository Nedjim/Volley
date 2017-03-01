var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('frenchTeam', {title: 'Equipes de France'});
});

module.exports = router;