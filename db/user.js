/***
 * @Description: user表处理
 * @Author: mytac
 * @Date: 2020-07-07 07:49:44
 */
const {query}=require('../utils/db')
 // 注册
const register=(con,params)=>{
    const {pswd,account}=params
    console.log('pswd',pswd)
    console.log('account',account)
    const sql=`INSERT INTO user(account,pswd) 
    VALUES('${account}','${pswd}')`
    console.log('sql',sql)
    return query(con,sql)
}

const bindTel=(con,params)=>{
    const {account,tel}=params
    console.log('params',params)
    const sql1=`SELECT account FROM user WHERE account="${account}" `
    return query(con,sql1).then((data)=>{

    })
}

module.exports={
    register,
    bindTel
}