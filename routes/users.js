/***
 * @Description: 
 * @Author: mytac
 * @Date: 2020-04-11 21:40:19
 */
var express = require('express');
const db_user = require('../db/user')
const db = require('../utils/db')
var router = express.Router();
const {
  sendSms,
  errorMsg
} = require('../utils')
const model = require('../db')

/* GET users li sting. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  const {
    pswd,
    account
  } = req.body
  if (!pswd || !account) {
    res.status(403).send(errorMsg(4011))
  }
  db.connect()
    .then(con => db.selectDB(con))
    .then(con => db_user.register(con, {
      pswd,
      account
    }))
    .then(data => res.status(200).send('success'))
    .catch(err => res.status(403).send(err.code || err.sql))
});


router.post('/register', function (req, res, next) {
  const {
    pswd,
    account
  } = req.body

  if (!pswd || !account) {
    res.status(403).send('invalid input')
  }

  db.connect()
    .then(con => db.selectDB(con))
    .then(con => db_user.register(con, {
      pswd,
      account
    }))
    .then(data => res.status(200).send('success'))
    .catch(err => res.status(403).send(err.code || err.sql))
});

router.post('/bindTel', function (req, res, next) {
  const {
    tel,
    account
  } = req.body

  if (!tel || !account) {
    res.status(403).send('invalid input')
  }

  db.connect()
    .then(con => db.selectDB(con))
    .then(con => db_user.bindTel(con, {
      tel,
      account
    }))
    .then(data => res.status(200).send('success'))
    .catch(err => {
      console.log(err)
      return res.status(403).send(err.code || err.sql)
    })
});

router.post('/sendAuthCode', function (req, res, next) {
  const {
    tel
  } = req.body
  const randomCode = (Math.random() * 1000000).toFixed(0)
  if (!global.tempAuthCode) {
    global.tempAuthCode = {
      [tel]: randomCode
    }
  } else {
    global.tempAuthCode[tel] = randomCode
  }


  sendSms(tel, randomCode)
    .then(() => {
      setTimeout(() => {
        delete global.tempAuthCode[tel]
      }, 120000)
    })
    .then(() => res.send(randomCode))
    .catch(err => res.status(403).send(err))

});

router.post('/checkAuthCode', function (req, res, next) {
  const {
    code,
    tel
  } = req.body
  if (global.tempAuthCode && global.tempAuthCode[tel] === code) {
    res.status(200).send('success')
  } else {
    res.status(403).json({
      error: 'invalid code'
    })
  }
})


module.exports = router;