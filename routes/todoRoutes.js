const express = require('express');
const router = express.Router(); // to use router
const createTodoController = require('../controllers/createTodoController.js');
const { getTodoController, getTodoByIdController } = require("../controllers/getTodoController");
const updateTodoController = require("../controllers/updateTodoController.js");
const deleteTodoController = require("../controllers/deleteTodoController.js");

router.post("/createTodo", createTodoController);
router.get("/getTodos", getTodoController);
router.get("/getTodos/:id", getTodoByIdController);
router.put("/updateTodo/:id", updateTodoController);
router.delete("/deleteTodo/:id", deleteTodoController);

module.exports = router;