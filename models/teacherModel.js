const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  teacherFirstName: {
    type: String,
    required: true,
  },
  teacherLastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  holyNameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "holyName",
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classOfChurch",
  },
});

const teacher = mongoose.model("teacher", teacherSchema);
module.exports = teacher;
