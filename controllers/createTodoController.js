const todoModel = require("../models/todoModel");

async function createTodoController(req, res){
    try{
        const {heading, desc} = req.body;
        const response = await todoModel.create({title: heading, description: desc});
        res.status(200).json({
            data: response,
            message: "Successfully created a todo"
        })
    }catch(err){
        console.log(err.message)
    }
    
}

module.exports = createTodoController;