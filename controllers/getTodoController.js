const todoModel = require("../models/todoModel");

const getTodoController = async(req, res) =>{
    try{
        // fetch all documents from db
        const response = await todoModel.find();
        console.log(response)
        // send as response 
        res.status(200).json({
            data: response,
            message: "All todos shown"
        })
    }catch(err){
        console.log("Err")
    }
}

const getTodoByIdController = async(req, res) =>{
    try{
        const {id} = req.params;
        // fetch all documents from db
        const response = await todoModel.findById({_id: id});
        console.log(response)
        // send as response 
        res.status(200).json({
            data: response,
            message: "Single todo shown"
        })
    }catch(err){
        console.log("Err")
    }
}

module.exports = { getTodoController, getTodoByIdController };
