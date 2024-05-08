const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
