/***
 * @Description: 
 * @Author: mytac
 * @Date: 2020-04-11 21:40:19
 */
var express = require('express');
const db_user=require('../db/user')
const db = require('../utils/db')
var router = express.Router();

/* GET users li sting. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  console.log(req.body)
  res.send('login');
  next();
});

router.post('/register', function (req, res, next) {
  const {pswd,account}=req.body

    db.connect()
    .then(con=>db.selectDB(con))
    .then(con=>db_user.register(con,{pswd,account}))
    .then(data=>res.send(data))
    .catch(err=>res.send(err))
});

router.post('/sendAuthCode', function (req, res, next) {
  console.log(req.body)
  res.send('sendAuthCode');
});



module.exports = router;