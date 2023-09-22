const {Router}=require('express'); 
const  userController = require('../controller/userController')

const userRoutes=Router();
userRoutes.post('/login',userController.login());
userRoutes.post('/register',userController.register());

module.exports=userRoutes;
