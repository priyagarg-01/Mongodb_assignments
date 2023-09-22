const express= require('express');
const taskRouter= require('./routes/taskRoutes');
const userRouter= require('./routes/userRoutes');
const connection= require('./db/connection');

const taskRouter=Router();

app.use('./api',taskRouter);
app.use('./api',taskRoutes);

taskRouter.get('/getaltask');
taskRouter.post('/createtask');
taskRouter.put('/updatetask');
taskRouter.delete('/deletetask');

module.exports=taskRouter;