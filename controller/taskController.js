const { update } = require("../model/Task")
const task = require("../model/Task")


//add tasks
exports.createTask = async (req, res) => {
    try{
        let task = await req.body()
        let created = await Task.create(task) 
        if(!created)
        return res.status(404).json({
            success: false,
            message: "task creation failed",
        })
        res.status(201).json({
            success: true,
            message: "tasks created",
            tasks,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}

//update task
exports.updateTask = async (req, res) => {
    try{
        let id = {_id: req.params.id }
        let task = await req.body
        let updated = await Task.findOneAndUpdate(id, { new: true }) 
        if(!updated)
        return res.status(404).json({
            success: false,
            message: "task update failed",
        })
        res.status(200).json({
            success: true,
            message: "tasks updated",
            task: updated,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}

//delete task
exports.deleteTask = async (req, res) => {
    try{
        let id = {_id: req.params.id }
        let task = await req.body
        let deleted = await Task.findOneAndRemove(id) 
        if(!updated)
        return res.status(404).json({
            success: false,
            message: "no task deleted",
        })
        res.status(200).json({
            success: true,
            message: "tasks deleted",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}

//retrieve all tasks
exports.getAllTasks = async (req, res) => {
    try{
        let tasks = await Task.find()
        if(tasks.length === 0)
        return res.status(404).json({
            success: false,
            message: "no task found",
        })
        res.status(200).json({
            success: true,
            message: "all tasks retrieved",
            tasks,
            count: task.length,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        })
    }
}

