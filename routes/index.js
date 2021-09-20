var express = require('express');
var router = express.Router();
const allController = require('../controller/allController.js')
/* GET home page. */
router.get('/', allController.home);

module.exports = router;
