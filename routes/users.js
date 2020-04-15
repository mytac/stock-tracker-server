/***
 * @Description: 
 * @Author: mytac
 * @Date: 2020-04-11 21:40:19
 */
var express = require('express');
var router = express.Router();

/* GET users li sting. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  console.log(req.body)
  res.send('login');
});


module.exports = router;