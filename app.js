const express=require('express');

const app=express();
app.use('/api',taskRouter);
app.use('/api',taskRoutes);
app.use(connection());
// npm i mongodb -g g is for global : for storing in the computer

app.listen(1234,(error)=>{
    if(error){
        console.log("error occur",error);
    }
    else{
        console.log("Server Started");
    }
})