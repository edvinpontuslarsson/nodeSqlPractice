'use strict'

require('dotenv').config()
const mySql = require('mysql')
const jsonHandler = require('./lib/jsonHandler')
const path = require('path')

// read files & store in DB at specific console input

const connection = mySql.createConnection({
    host: process.env.hostname,
    user: process.env.mysql_username,
    password: process.env.mysql_password
})

connection.connect(async err => {
    if (err) throw err

    const fileDirectory = path.join(__dirname, 'jsonFiles')
    const fileNames = await jsonHandler.getFileNames(fileDirectory)
    
    const filePaths = fileNames.map(fileName => 
        path.join(fileDirectory, fileName))
    const objects = 
        await jsonHandler.getObjectsFromFiles(filePaths)

    console.log(objects)
})
