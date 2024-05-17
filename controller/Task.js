const Task = require('../model/Task');


const createTask = async(req, res)=>{
 const task = await Task.create(req.body);
 res.status(200).json({task});
}

const findAllTasks = async(req, res)=>{
    const alltasks = await Task.find({});
    res.status(200).json(alltasks);
}
const getTask = async(req, res)=>{
    const {id:taskId} = req.params;
    const task = await Task.findOne({_id:taskId});
    res.status(200).json(task);
}
const findAndUpdate = async (req, res)=>{
    const {id:taskId} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
        new:true,
        runValidators:true,
    });
    res.status(200).json(task)
}
const findAndDelete = async (req, res)=>{
    const {id:taskId} = req.params;
    console.log(taskId);
    await Task.findOneAndDelete({_id:taskId});
    res.status(200).json({message:"Task deleted successfully"});
}
module.exports = {
    createTask,
    findAllTasks,
    findAndUpdate,
    findAndDelete,
    getTask
}