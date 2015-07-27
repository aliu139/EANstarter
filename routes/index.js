var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app');
});

//Necessary for clientside routing
router.get('/partials/:filename', function(req, res, next){
  var filename = req.params.filename;
  res.render("partials/" + filename );
});

module.exports = router;
