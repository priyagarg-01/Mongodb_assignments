const { default: mongoose } = require("mongoose")
const url="mongodb+srv://priya21csu584:priya21csu584@cluster0.ex7pxxi.mongodb.net/testingdatabase?retryWrites=true&w=majority&appName=AtlasApp"

const connection=()=>{
    mongoose.connect(url).then(()=>{
        console.log("Connected");
    }).catch((error)=>{
        console.log(error);
    })
    
}

module.exports=connection;