const express = require('express')
const Employee = require("../models/employee");

// Get All Employee
exports.getAllEmployees = async (req, res, next) => {
    try {
        const employess = await Employee?.find();
  
    res.status(200).json({
      success: true,
      employess,
    });
    } catch (error) {
       console.log(error,"employee controllers") 
    }
  };

  // Add Employee data
exports.addEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json({
          success: true,
          message: "Employee Created Successfully",
          employee: employee,
        });
        console.log(employee);
    } catch (error) {
        console.log(error,"employee create")
    }
  };

  // update Employee Details
  exports.updateEmployeeDetails = async (req, res, next) => {
    let employee = Employee.findById(req.params.id);
  
    if (!employee) {
      return res.status(404).send('employee not found')
    }
    employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
  
    res.status(201).json({
      success: true,
      message: "Employee Detail Updated Successfully",
      employee: employee,
    });
    console.log(employee);
  };


  // Delete Employe Detail
exports.deleteEmployeeDetails = async (req, res, next) => {
    let employee = Employee.findById(req.params.id);
  
    if (!employee) {
      return res.status(404).send('employee not found')
    }
    employee = await Employee.findByIdAndDelete(req.params.id);
    res.status(201).json({
        success: true,
        message: "Employee Detail Deleted Successfully",
        employee: employee,
      });
    console.log(employee);
  };
  
  