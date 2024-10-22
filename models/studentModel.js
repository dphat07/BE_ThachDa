const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  stuFirstName: {
    type: String,
    required: true,
  },
  stuLastName: {
    type: String,
    required: true,
  },
  stuDob: {
    type: Date,
    required: true,
    unique: true,
  },
  stuGender: {
    type: Boolean,
    required: true,
  },
  stuHolyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "holyName",
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classOfChurch",
  },
});

const student = mongoose.model("student", studentSchema);
module.exports = student;
