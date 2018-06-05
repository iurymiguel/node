//Cria conexão com o banco de dados mySql.
var mysql = require('mysql');

//Por o código em uma variável, garante que
// só é executado apenas 1 vez, quando fizer o primeiro auto load.
var connMySQL = function () {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'portal_noticias'
  });
}

module.exports = function () {
  return connMySQL;
}