/***
 * @Description: 
 * @Author: mytac
 * @Date: 2020-04-11 21:40:19
 */
var express = require('express');
var router = express.Router();
const model = require('../db')

/* GET users li sting. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  res.send('login');
});

router.post('/signup', function (req, res, next) {
  const {
    username,
    pswd
  } = req.body
  console.log('1', req.body)
  model.user.addUser({
    username,
    pswd
  }).then(() => {

  }).catch(error => {
    console.log('error', error)
  })
});


module.exports = router;