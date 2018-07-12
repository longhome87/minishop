var express = require('express');
var router = express.Router();
const productController = require('../server/controllers').Product;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('product');
});

router.post('/add', productController.create);

module.exports = router;
