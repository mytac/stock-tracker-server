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
                resolve(connection)
            }
        });
    })

}

const createBase = (connection) => {
    return new Promise((res, rej) => {
        connection.query('CREATE DATABASE stock', function (error, results, fields) {
            if (error) rej(error);
            res(connection)
        });
    })
}

const createTable = (connection, part) => {
    return new Promise((res, rej) => {
        /* const sql = `
        create table if not exists stocks(
            id int primary key auto_increment,
            code int not null,
            title varchar(255)not null
        )` */

        const sql = `
        create table if not exists user(
            id int primary key auto_increment,
            username varchar(255)not null,
            nickname varchar(255)not null,
            pswd varchar(255)not null
        )`


        connection.query(sql, function (error, results, fields) {
            if (error) rej(error);
            res(connection)
        });
    })
}

const useDataBase = (connection, db_name) => {
    return new Promise((res, rej) => {
        connection.query(`use ${db_name};`, function (error, results, fields) {
            if (error) rej(error);
            res(connection)
        });
    })
}


const query = (connection) => {
    return new Promise((res, rej) => {
        connection.query('CREATE DATABASE stock', function (error, results, fields) {
            if (error) rej(error);
            res(results)
        });
    })
}

module.exports = {
    connect,
    createBase,
    createTable,
    useDataBase,
}