const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'nodedb',
    database: 'nodedb',
    port: '3306'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values ('Wesley')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1> LAB NODE </h1>')
})

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})