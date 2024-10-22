const express = require("express");
const router = express.Router();
const Students = require("../models/studentModel");

router.post("/", async (req, res) => {
  try {
    const student = await Students.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const student = await Students.find({});
    res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Students.findByIdAndUpdate(id, req.body);
    if (!student) {
      return res
        .status(400)
        .json({ message: `cannot find any project with ID ${id}` });
    }
    const updatedStudent = await Students.findById(id);
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
