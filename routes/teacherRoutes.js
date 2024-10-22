const express = require("express");
const router = express.Router();
const Teachers = require("../models/teacherModel");

router.post("/", async (req, res) => {
  try {
    const teacher = await Teachers.create(req.body);
    res.status(200).json(teacher);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const teacher = await Teachers.find({});
    res.status(200).json(teacher);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teachers.findByIdAndUpdate(id, req.body);
    if (!teacher) {
      return res
        .status(400)
        .json({ message: `cannot find any project with ID ${id}` });
    }
    const updatedTeacher = await Teachers.findById(id);
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
