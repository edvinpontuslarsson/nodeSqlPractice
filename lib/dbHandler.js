'use strict'

require('dotenv').config()
const mySql = require('mysql')

/**
 * @param {Array} fileContents - array with objects
 */
const storeFileContents = fileContents => {
    connection.connect(err => {
        if (err) throw err

        let sqlQuery =
            'INSERT INTO Files (id, title, content) VALUES ?'

        const values = getValuesFromFileContents(fileContents)
        console.log(values)
    })
}

const connection = mySql.createConnection({
    host: process.env.hostname,
    user: process.env.mysql_username,
    password: process.env.mysql_password,
    database: process.env.database_name
})

const getValuesFromFileContents = fileContents =>
    fileContents.map(content => Object.values(content))

module.exports = { storeFileContents }
