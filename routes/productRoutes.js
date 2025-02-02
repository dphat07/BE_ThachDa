const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Update a product
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any project with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
