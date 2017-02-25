var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('webapp/demo/index', { title: '这是标题111' });
});

router.get("/webapp/demo", function(req, res, next) {
  res.render('webapp/demo/index', { title: '这是标题2222' });
});

router.get("/webapp/demo/test", function(req, res, next) {
  res.render('webapp/demo/test', { title: '这是标题3333' });
});

module.exports = router;
