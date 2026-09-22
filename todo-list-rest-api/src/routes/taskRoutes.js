const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// All task routes require login
router.use(authMiddleware);

// GET all tasks for logged-in user
router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.find({
      userId: req.user.userId,
    });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

// CREATE task for logged-in user
router.post("/", async (req, res, next) => {
  try {
    const task = await Task.create({
      ...req.body,
      userId: req.user.userId,
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

// UPDATE only the logged-in user's task
router.put("/:id", async (req, res, next) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.userId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    res.json(task);
  } catch (error) {
    next(error);
  }
});

// DELETE only the logged-in user's task
router.delete("/:id", async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;