'use strict'

const fs = require('fs')

const getFileNames = (directory) => {
    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, fileNames) => {
            if (err) throw err
            resolve(fileNames)
        })
    })
}

const getObjectsFromFiles = filePaths => {
    const promisedObjects = []

    return new Promise(async (resolve, reject) => {
        filePaths.forEach(filePath => {
            const obj = getObject(filePath)
            promisedObjects.push(obj)
        })

        resolve(Promise.all(promisedObjects))
    })
}

const getObject = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, file) => {
            if (err) throw err
    
            const obj = JSON.parse(file)
            resolve(obj)
        })
    })
}

module.exports = {
    getFileNames,
    getObjectsFromFiles
}
