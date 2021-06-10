const express = require("express");

const employeeRepo = require("../repositories/employees-repo");

const router = express.Router();
router.get("/", (req, res) => {
console.log("testing github");

  employeeRepo.getAllEmployees.then(result => {
    console.log(result);
  
    res.json(result);
    res.end();

  }).catch(error => {
    console.log(error);
    res.status(500);
    res.end();
  })
});
module.exports=router;