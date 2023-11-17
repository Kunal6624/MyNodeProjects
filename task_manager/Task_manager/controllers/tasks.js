const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const {createCustomError}  = require('../errors/custom_error');


const getAllTasks = asyncWrapper (async (req, res, next) => {
    const tasks = await Task.find({});
    console.log("All Tasks");
     if (!tasks) 
      return  next(createCustomError("tasks are not found data", 404));
     
    res.status(201).json({tasks})
}); 

const createTask = asyncWrapper (async (req,res, next) => {
    const task = await Task.create(req.body);
    if(!task)
    return  next(createCustomError("task has not created", 404));

    res.status(201).json({task});
});

const getTask = asyncWrapper( async (req, res, next) => {
        console.log("req params::::",req.params);
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID, });  
        
        if(!task)
        return  next( createCustomError(`the task with the id : ${taskID} is not there`, 404));
      
        res.status(200).json({task});
});


const deleteTasks =  asyncWrapper (async (req, res, next) => {
        console.log("req params ::::", req.params);
        const {id :taskID} = req.params;
        const task = await Task.findOneAndDelete({
            _id: taskID,
        });

        if(!task)
        return  next( createCustomError(`the task with the id : ${taskID} is not there`, 404));
      
        res.status(200).json({task});
});

const updateTask = asyncWrapper (async (req, res, next) => {
        console.log("req params::::",req.params.id);
        const{id: taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {
            new: true,
            runValidators: true,
        });

        if(task) 
        return  next( createCustomError(`the task with the id : ${taskId} is not there`, 404));

        res.status(200).json({task});
    });


module.exports = { getAllTasks, createTask, getTask, updateTask,deleteTasks };