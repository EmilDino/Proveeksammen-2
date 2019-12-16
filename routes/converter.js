var express = require('express');
var router = express.Router();
var converter = require('../modules/converter');

router.get('/:kilowatt', function(req, res, next ) {
    res.render('converter', {
      value: converter.kilowattToWatt(req.params.kilowatt)
    })
  });

module.exports = router; 