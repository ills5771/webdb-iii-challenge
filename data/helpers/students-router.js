const express = require("express");

const router = express.Router();

const db = require("../dbConfig");

router.get("/", async (req, res) => {
  try {
    const students = await db("students");
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await db("students")
      .where({ id: req.params.id })
      .first();
    if (student) {
      res.status(201).json(student);
    } else {
      res.status(404).json({ message: "That student does not exist" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
