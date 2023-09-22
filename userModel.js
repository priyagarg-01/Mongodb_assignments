const {default: mongoose}=require("mongoose");
const userSchema=new mongoose.Schema({

    // user validations 
    username : {type:String, required:true},
    email: {type:String, required:true , unique:true},
    password:{type:String, required:true}
})

const userModel=mongoose.model("userDatas",userSchema);

// const userModel=mongoose.model("Database name",Structure of the db); -->>syntax

module.exports=userModel;


