const express = require("express");
const { getAllEmployees, addEmployee,  updateEmployeeDetails, deleteEmployeeDetails } = require("../controllers/employee");

const router = express.Router();

router.route("/").get(getAllEmployees);
router.route("/").post(addEmployee);
router.route("/:id")
.put(updateEmployeeDetails)
.delete(deleteEmployeeDetails);


module.exports = router;