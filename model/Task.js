const{ Schema, model } = require('mongoose')

const taskSchema = new Schema({
    _id: {
        type: Number,
        required: true,
        unique: true,
    },

    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        maxlength: 20,
    },

    description: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 50,
    },
},
{ timestamps: true }
)

const taskModel = model("tasks", taskSchema)
module.exports = taskModel;
