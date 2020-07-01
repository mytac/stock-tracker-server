const CONFIG = require('../configs');
var mysql = require('mysql');
const options = CONFIG.DATABASE

const addUser = (params) => {
    console.log('params', params)
    const {
        username,
        pswd
    } = params
    return new Promise((res, rej) => {
        const nickname = username
        const sql = `INSERT INTO user(username,nickname,pswd) VALUES(?,?,?)`
        //  const sql = `INSERT INTO user(username,nickname,pswd) VALUES(${name},${nickname},${pswd})`;
        const model = [username, nickname, pswd];
        global.connection.query(sql, model, function (error, results, fields) {
            if (error) rej(error);
            console.log('results', results)
            res(results.insertId)
        });
    })
}

module.exports = {
    addUser
}