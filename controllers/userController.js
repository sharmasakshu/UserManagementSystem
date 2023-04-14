const User =require("../models/userModel.js");

const getAllUsers=async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

const createUser=async (req, res) => {
    try {
        let data = req.body;
        // console.log(data);
        const newUser = await  new User(data).save(); 
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error : error.message})
    }
  

   
  
}

module.exports={getAllUsers,createUser}