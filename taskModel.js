const { default: mongoose } = require("mongoose")

const taskSchema=new mongoose.Schema({
    taskId:{type:String, req:true , unique:true},
    tasktitle:{type:String,req:true},
    taskDesc:{type:String},
    dateofCreation:{type:Timestamp},
    useremail:{type:String, req:true}

    // Default:Date.now()
})

const taskModel=mongoose.model('taskDatas',taskSchema);

module.exports=taskModel;