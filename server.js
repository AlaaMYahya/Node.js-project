const express = require('express')
const mongoose = require('mongoose')
const app = express()

const User = require('./models/UserModel')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.get('/', (req , res) =>{
    res.send('Hello, it is run')
})

app.get('/user', (req , res) =>{
    res.send('Hello, user My name is Alaa')
})

// get all users
app.get('/users', async(req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// get user by id
app.get('/users/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

 //create new user 
app.post('/users', async(req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Update a user
app.put('/users/:id', async(req, res) => {
    try{
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({message: `connot find any product with Id ${id}`})
        }
        const updateduser = await User.findById(id);
        res.status(200).json(updateduser);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


//Delete a user 
app.delete('/users/:id', async(req, res) => {
    try{
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id, req.body);
        if(!user){
            return res.status(404).json({message: `connot find any product with Id ${id}`})
        }
        res.status(200).json(user);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})



mongoose.connect('mongodb+srv://Alaa:Fdbfma128@atlascluster.aiz5tp8.mongodb.net/user?retryWrites=true&w=majority')
.then(() =>{
    console.log('connected to MongoDB')
    app.listen(3006, ()=> {
    console.log("Node API is running on pert 3006")
    });
}).catch((error) => {
    console.log(error)
})




