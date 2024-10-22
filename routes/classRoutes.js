const express = require("express");
const router = express.Router();
const ClassOfChurch = require("../models/classModel");

router.post("/", async (req, res) => {
  try {
    const classOfChurch = await ClassOfChurch.create(req.body);
    res.status(200).json(classOfChurch);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const classOfChurch = await ClassOfChurch.find({});
    res.status(200).json(classOfChurch);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const classOfChurch = await ClassOfChurch.findByIdAndUpdate(id, req.body);
    if (!classOfChurch) {
      return res
        .status(400)
        .json({ message: `cannot find any project with ID ${id}` });
    }
    const updatedClass = await ClassOfChurch.findById(id);
    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete a class
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const classOfChurch = await ClassOfChurch.findByIdAndDelete(id);

    if (!classOfChurch) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }

    res.status(200).json(classOfChurch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Delete all of class
router.delete("/", async (req, res) => {
  try {
    const result = await ClassOfChurch.deleteMany({});
    res
      .status(200)
      .json({ message: `${result.deletedCount} class names deleted.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
