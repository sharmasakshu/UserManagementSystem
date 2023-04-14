const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    //   default: "Guest User",
    },
    age: {
        type: Number,
         required: true
        // default: "Guest User",
      },
    email: {
      type: String,
      required: true
    //   unique: true
    },
    phoneNumber: {
      type: String,
      required: true
    
    //   unique: true
    },
  });

const User = mongoose.model('User', userSchema)
module.exports= User
