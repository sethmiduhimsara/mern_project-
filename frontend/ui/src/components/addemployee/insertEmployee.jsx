import React, { useState } from "react";
import "./insertEmployee.css";
import axios from "axios";

export const InsertEmployee = () => {
  // Manage state
  const [employeeData, setEmployeedata] = useState({
    employeeID: "",
    name: "",
    address: "",
    nic: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeedata({
      ...employeeData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/employees", employeeData)
      .then(() => {
        alert("Employee added successfully!");
        setEmployeedata({
          employeeID: "",
          name: "",
          address: "",
          nic: "",
        });
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        alert("Failed to add employee. Please try again.");
      });
  };

  return (
    <div className="form-container">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="employeeID">Employee ID</label>
          <input
            type="text"
            id="employeeID"
            name="employeeID"
            value={employeeData.employeeID}
            placeholder="Enter Employee ID"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employeeData.name}
            placeholder="Enter Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={employeeData.address}
            placeholder="Enter Address"
            rows="3"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="nic">NIC</label>
          <input
            type="text"
            id="nic"
            name="nic"
            value={employeeData.nic}
            placeholder="Enter NIC"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default InsertEmployee;
