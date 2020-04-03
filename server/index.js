require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {getInventory} = require('./controller')
const {SERVER_PORT, DB_STRING} = process.env

app.use(express.json())

app.get('/api/inventory', getInventory)

massive(DB_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {console.log(`Running on ${SERVER_PORT}`)})

})
