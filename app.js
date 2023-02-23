const express = require('express')
const port = process.env.PORT || 2008
const cors = require('cors')
const app = express()
const server = require('http').Server(app)

app.use(cors())

app.use('/api', require('./routes/api'))

server.listen(port, function () {
    console.log('[system] Open | Port : ' + port)
})