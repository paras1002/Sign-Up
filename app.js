// HANDLING REQ & RES. IN APP.JS
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

app.use( cors() )

//connect to DB
mongoose.connect("mongodb+srv://paras0000:paras0000@cluster0.p27she3.mongodb.net/myproject?retryWrites=true&w=majority")
.then(console.log("connected to DB"))
.catch(err => console.log(err))

// Use the body-parser middleware
app.use( bodyParser.urlencoded({ extended: false }) )
app.use( bodyParser.json() )

// Managing your routes
const userssRoute = require('./api/routes/users')
app.use('/users', userssRoute)

// Error Handling
app.use( (req, res) => {
    res.status(404).json( {message: 'Resource Not Found!'} )
} )



app.listen('5500',(req,res)=>{
    console.log('connected to server')
})