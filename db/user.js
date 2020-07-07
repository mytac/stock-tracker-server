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

module.exports={
    register
}