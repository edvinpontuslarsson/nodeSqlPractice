'use strict'

require('dotenv').config()
const mySql = require('mysql')

const connection = mySql.createConnection({
    host: process.env.hostname,
    user: process.env.mysql_username,
    password: process.env.mysql_password,
    database: process.env.database_name
})

const storeFileContents = fileContents => {
    connection.connect(err => {
        if (err) throw err

        console.log(fileContents)
    })
}

module.exports = { storeFileContents }
