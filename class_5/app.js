// Creating first Server

const express = require('express')

const app = express()


// API

// Route   // Route Handler
app.get('/', (req, res) => {  
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is runnung on port: 3000');
    
})