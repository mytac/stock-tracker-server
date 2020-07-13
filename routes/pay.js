var express = require('express');
var router = express.Router();
const CONFIG=require('../configs')
const {PAYCONFIG}=CONFIG

/* GET users li sting. */
/* router.get('/redirect', function (req, res, next) {
    console.log(req)
  res.redirect(PAYCONFIG.wechatpay_5).then((a)=>{
    console.log('a',a)
  })
}); */


module.exports = router;