var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('practice', {title: 'Pratiquer'});
});

module.exports = router;