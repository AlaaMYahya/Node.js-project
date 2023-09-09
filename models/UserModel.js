const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userId :{
        type : Number,
        require: true
    },
    username:{
        type : String,
        require: [true, "Please enter a user name"]
    },
    email: {
        type : String,
        require: [true, "Please enter an email "]
    },
    bio: {
        type : String,
        require: false,
    }

},{timestamps: true}
)

const User = mongoose.model('User',userSchema );

module.exports = User;