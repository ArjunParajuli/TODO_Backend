const todoModel = require("../models/todoModel");

const updateTodoController = async(req, res) =>{
    try{
        const {id} = req.params;
        const filter = {_id: id};
        const change = {title: "Changed Title"}
        const response = await todoModel.updateOne(filter, change);
        console.log(response);

        res.status(200).json({
            data: response,
            message: "Data Updated",
            status: true
        })
    }catch(err){
        console.log("Err")
    }
}

module.exports = updateTodoController;