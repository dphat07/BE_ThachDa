const mongoose = require("mongoose");

const holyNameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: [true, "Please enter a produce name"],
  },
  note: {
    type: String,
    default: null,
  },
});

const holyName = mongoose.model("holyName", holyNameSchema);
module.exports = holyName;
