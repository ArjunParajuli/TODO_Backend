const todoModel = require("../models/todoModel");

const deleteTodoController = async(req, res) =>{
    try{
        const {id} = req.params;
        const filter = {_id: id};
        const response = await todoModel.deleteOne(filter);
        res.status(200).json({
            data: response,
            status: true,
            message: "Deleted document",       
        })
    }catch(err){
        console.log("Err")
    }
}

module.exports = deleteTodoController;