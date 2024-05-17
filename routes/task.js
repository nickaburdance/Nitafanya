const { createTask, findAllTasks, findAndUpdate, findAndDelete, getTask } = require("../controller/Task");

const express = require('express');
const router = express.Router();

 router.route('/create').post(createTask);
 router.route('/tasks').get(findAllTasks);
    router.route('/:id').get(getTask).patch(findAndUpdate).delete(findAndDelete)

 module.exports = router;