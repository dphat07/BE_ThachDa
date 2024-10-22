const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const holyNameRoutes = require("./routes/holyNameRoutes");
const classOfChurch = require("./routes/classRoutes");
const teachers = require("./routes/teacherRoutes");
const students = require("./routes/studentRoutes");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/products", productRoutes);
app.use("/holyName", holyNameRoutes);
app.use("/classOfChurch", classOfChurch);
app.use("/teachers", teachers);
app.use("/students", students);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Node API app is running on port 3000: ");
});

connectDb();
