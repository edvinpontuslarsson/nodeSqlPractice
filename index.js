'use strict'

const jsonHandler = require('./lib/jsonHandler')
const dbHandler = require('./lib/dbHandler')
const path = require('path')

const getDirectory = () => {
    const userInput = process.argv[2]
    
    if (!userInput) {
        console.log('Please enter directory path')
        process.exit()
    }

    return userInput
}

;(async () => {
    const fileDirectory = getDirectory()
    
    const fileNames = await jsonHandler.getFileNames(fileDirectory)
    
    const filePaths = fileNames.map(fileName => 
        path.join(fileDirectory, fileName))
    const objects = 
        await jsonHandler.getObjectsFromFiles(filePaths)
    
    dbHandler.storeFileContents(objects)
})()
