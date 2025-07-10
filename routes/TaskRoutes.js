const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasksByUser,
  getActiveTasks,
  getPendingTasks,
  getCompletedTasks,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const authMiddleware = require('../middleware/tokenVerify');

router.post('/create', authMiddleware, createTask);
router.get('/get', authMiddleware, getAllTasksByUser);
router.get('/active', authMiddleware, getActiveTasks);
router.get('/pending', authMiddleware, getPendingTasks);
router.get('/completed', authMiddleware, getCompletedTasks);
router.put('/update/:id', authMiddleware, updateTask);
router.delete('/delete/:id', authMiddleware, deleteTask);

module.exports = router;
