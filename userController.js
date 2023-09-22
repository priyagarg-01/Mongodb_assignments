const { models } = require("mongoose")

const userController={
    async login(request,response){
        try {
            
        } catch (error) {
            response.status(500).json({message:"Interval server error"});
        }
    },
    async register(request,response){
        try {
            const {username,email,password}=request.body;

        } catch (error) {
            response.status(500).json({message:"Interval server error"});
        }
    }
}

module.exports=userController;

