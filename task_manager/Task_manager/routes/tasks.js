const express = require('express');
const router = express.Router();

//controllers
const { getAllTasks, createTask, getTask, updateTask,deleteTasks } = require('../controllers/tasks');

//routes
router.get('/', getAllTasks);
router.post('/',createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTasks);

module.exports = router;