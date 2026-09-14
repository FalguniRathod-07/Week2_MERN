
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
} = require("../controllers/noteController");

const router = express.Router();

// All note routes require JWT authentication
router.use(authMiddleware);

// Create note
router.post("/", createNote);

// Get all notes
router.get("/", getNotes);

// Get single note
router.get("/:id", getNote);

// Update note
router.put("/:id", updateNote);

// Delete note
router.delete("/:id", deleteNote);

module.exports = router;