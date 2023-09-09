const express = require('express')
const app = express()

// routes
app.get('/', (req , res) =>{
    res.send('Hello, it is run')
})

app.listen(3006, ()=> {
    console.log("Node API is running on pert 3006")
})

