const mysql = require('mysql2/promise')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sistema_escolar'
})

module.exports = {
    conexao
}