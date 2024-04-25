const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 50,
    },
    description:{
        type: String,
        required: true,
        maxLength: 100,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now(),
    },
    updatedAt:{
        type: Date,
        required: true,
        default: Date.now(),
    }
})

const todoModel = mongoose.model("todoModel", todoSchema);  // creats a collection named todoModel in db
module.exports = todoModel;