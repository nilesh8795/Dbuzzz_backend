const Task = require('../models/Task');

const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const userId = req.user?.id;

    if (!title || !userId) {
      return res.status(400).json({ message: 'Title and user ID are required' });
    }

    const task = new Task({
      title,
      description,
      status: status || 'pending',
      userId,
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getAllTasksByUser = async (req, res) => {
  try {
    const userId = req.user?.id;
    const tasks = await Task.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getActiveTasks = async (req, res) => {
  try {
    const userId = req.user?.id;
    const tasks = await Task.find({ userId, status: 'active' }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getPendingTasks = async (req, res) => {
  try {
    const userId = req.user?.id;
    const tasks = await Task.find({ userId, status: 'pending' }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getCompletedTasks = async (req, res) => {
  try {
    const userId = req.user?.id;
    const tasks = await Task.find({ userId, status: 'completed' }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const userId = req.user?.id;
    const taskId = req.params.id;
    const { title, description, status } = req.body;

    const task = await Task.findOne({ _id: taskId, userId });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;

    await task.save();
    res.status(200).json({ message: 'Task updated', task });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const userId = req.user?.id;
    const taskId = req.params.id;

    const task = await Task.findOneAndDelete({ _id: taskId, userId });

    if (!task) {
      return res.status(404).json({ message: 'Task not found or unauthorized' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  createTask,
  getAllTasksByUser,
  getActiveTasks,
  getPendingTasks,
  getCompletedTasks,
  updateTask,
  deleteTask,
};
