const express = require('express')
const { json } = require('express')
const connect = require('./config/database')
const taskRoute = require('./router/taskRoute')

connect()

const app = express()
app.use(json())
app.use('/task', taskRoute)

app.get('/', (req, res) => {
    res.send('welcome to mongo db')
})

const PORT= process.env.PORT || 3000
app.listen(PORT, () => console.log("running on port 3000"))

