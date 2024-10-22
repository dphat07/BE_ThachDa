const express = require("express");
const router = express.Router();
const HolyNames = require("../models/holyNameModel");

router.post("/", async (req, res) => {
  try {
    const holyName = await HolyNames.create(req.body);
    res.status(200).json(holyName);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const holyName = await HolyNames.find({});
    res.status(200).json(holyName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const holyName = await HolyNames.findById(id);
    res.status(200).json(holyName);
  } catch {
    res.status(500).json({ message: error.message });
  }
});

//Update a holyName
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const holyName = await HolyNames.findByIdAndUpdate(id, req.body);

    if (!holyName) {
      return res
        .status(404)
        .json({ message: `cannot find any project with ID ${id}` });
    }
    const updatedHoly = await HolyNames.findById(id);
    res.status(200).json(updatedHoly);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete a holyName
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const holyName = await HolyNames.findByIdAndDelete(id);

    if (!holyName) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }

    res.status(200).json(holyName);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
