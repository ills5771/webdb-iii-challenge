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
router.post("/", async (req, res) => {
  try {
    const [id] = await db("students").insert(req.body);
    const student = await db("students")
      .where({ id })
      .first();
    res.status(201).json(student);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error adding the student" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const count = await db("students")
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const student = await db("students")
        .where({ id: req.params.id })
        .first();
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: "That student wasn't found" });
    }
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await db("students")
      .where({ id: req.params.id })
      .del();
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "That student wasn't found" });
    }
  } catch (error) {}
});

module.exports = router;
