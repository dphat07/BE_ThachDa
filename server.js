const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const holyNameRoutes = require("./routes/holyNameRoutes");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/db");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/products", productRoutes);
app.use("/holyName", holyNameRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Node API app is running on port 3000: ");
});

connectDb();
