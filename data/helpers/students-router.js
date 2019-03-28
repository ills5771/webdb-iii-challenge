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
module.exports = router;
