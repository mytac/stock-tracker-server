/***
 * @Description: 
 * @Author: mytac
 * @Date: 2020-07-01 08:28:52
 */
const CONFIG = require('../configs');
var mysql = require('mysql');
const options = CONFIG.DATABASE


const connect = () => {
    var connection = mysql.createConnection(options);
    return new Promise((resolve, reject) => {
        connection.connect(function (error) {
            if (!!error) {
                reject(error)
                console.log(error);
            } else {
                console.log('Connected!:)');
                resolve(connection)
            }
        });
    })

}

const selectDB = connection => new Promise((res, rej) => {
    connection.query('USE stock', function (error, results, fields) {
        if (error) rej(error);
        res(connection)
    });
})

const createBase = (connection) => {
    return new Promise((res, rej) => {
        connection.query('CREATE DATABASE stock', function (error, results, fields) {
            if (error) rej(error);
            res(results)
        });
    })
}

const query = (connection, sql) => {
    return new Promise((res, rej) => {
        if (!connection || !connection.query) rej('no connection')
        connection.query(sql, function (error, results, fields) {
            if (error) rej(error);
            res(results)
        });
    })
}

module.exports = {
    connect,
    createBase,
    query,
    selectDB,
}