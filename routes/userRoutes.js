const {Router} =require("express");
const {getAllUsers,createUser} =require("../controllers/userController");

const routes=Router();

routes.get("/",getAllUsers)
routes.post("/create", createUser )

module.exports=routes;