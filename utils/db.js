var mysql = require('mysql');
const options = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '950120admin',
}


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

const createBase = (connection) => {
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
}