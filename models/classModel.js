const mongoose = require("mongoose");

const classScheme = mongoose.Schema({
  scholasticId: {
    type: Number,
    required: true,
  },
  groupId: {
    type: String,
    required: true,
  },
  leaderId: {
    type: Number,
    required: true,
  },
  stayInClass: {
    type: Boolean,
    default: false,
  },
  studentIDs: {
    type: [String],
    default: [],
  },
  teacherIDs: {
    type: [String],
    default: [],
  },
});

const classOfChurch = mongoose.model("classOfChurch", classScheme);
module.exports = classOfChurch;
