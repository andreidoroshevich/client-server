const express = require('express')
const app = express()
const port = 7542
const bodyParser = require('body-parser');
const users = require('./users-router')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send("tasks")
})

app.use((req, res) => {
    res.send(404)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})