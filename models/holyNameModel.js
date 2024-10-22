const mongoose = require("mongoose");

const holyNameSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
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
  },
  {
    timestamps: true,
  }
);

const holyName = mongoose.model("holyName", holyNameSchema);
module.exports = holyName;
