const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// /status er vores endpoint som sender en json objekt tilbage
app.get('/status', (req, res) => {
    res.send({
       message: 'Hej med dig' 
    })
})

// Vores server kører på port 8081
app.listen(process.env.PORT || 8081)