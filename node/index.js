const express = require('express')
const app = express()
const port = 3000
const dotenv = require('dotenv');
dotenv.config();

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
};

module.exports = config;

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values ('ABC')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1> LAB NODE </h1>')
})

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})