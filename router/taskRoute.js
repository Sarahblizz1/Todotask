const router = require('express').Router()
const controller = require('../controller/taskController')

router.get('/', controller.getAllTasks)
router.post('/', controller.createTask)
router.put('/:id', controller.deleteTask)
router.put('/', controller.updateTask)

module.exports = router