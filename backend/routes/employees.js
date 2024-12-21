const express = require("express");

const router = express.Router();

const Employees = require("../models/employee");

// test
router.get("/test", (req, res) => res.send("Employee routes is working"));

//post
router.post("/", (req, res) => {
  Employees.create(req.body)
    .then(() => res.json({ msg: "Employee added successfully" }))
    .catch(() => res.status(400).json({ msg: "Employee adding failed" }));
});

//get
router.get("/", (req, res) => {
    Employees.find()
        .then((employees) => res.json(employees))
        .catch(() => res.status(404).json({ msg: "No employees found" }));
});

//findbyid
// Get employee by ID
router.get("/:id", (req, res) => {
    Employees.findById(req.params.id)
        .then(employee => {
            if (!employee) {
                return res.status(404).json({ msg: "Employee not found" });
            }
            res.json(employee);
        })
        .catch(() => res.status(400).json({ msg: "Invalid employee ID" }));
});
//findbyid and update
router.put("/:id", (req, res) => {
    Employees.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json({ msg: "Update successfully" });
        })
        .catch(() => res.status(400).json({ msg: "Update failed" }));
});
//delete
router.delete("/:id", (req, res) => {
    Employees.findByIdAndDelete(req.params.id)
        .then((employee) => {
            if (!employee) {
                return res.status(404).json({ msg: "Employee not found" });
            }
            res.json({ msg: "Employee deleted successfully" });
        })
        .catch(() => res.status(400).json({ msg: "Delete failed" }));
});

module.exports = router;
