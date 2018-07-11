var express = require('express');
var router = express.Router();
const productController = require('../server/controllers').Product;

/* GET users listing. */
router.get('/', productController.list);

router.post('/add', productController.create);

module.exports = router;
