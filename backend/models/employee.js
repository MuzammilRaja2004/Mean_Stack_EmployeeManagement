const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Employee Name"],
    trim: true,
  },
  position: {
    type: String,
    required: [true, "Please Enter Position Description"],
  },
  office: {
    type: String,
    required: [true, "Please Enter Office Location"],
},
salary: {
    type: Number,
    required: [true, "Please Enter Employee Salary"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);