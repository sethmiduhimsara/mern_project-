import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import'./updatedetails.css'

function UpdateEmployee() {
  const [employees, setEmployees] = useState({
    name: "",
    address: "",
    nic: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the employee details when the component loads
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/employees/${id}`)
      .then((res) => {
        setEmployees({
          name: res.data.name,
          address: res.data.address,
          nic: res.data.nic,
        });
      })
      .catch((err) => {
        console.log("Error from Update Employee", err);
      });
  }, [id]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployees((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/api/employees/${id}`, employees)
      .then(() => {
        // Navigate to the employee list page after successful update
        navigate("/");
      })
      .catch((err) => {
        console.log("Error updating employee", err);
      });
  };

  return (
    <div className="update-form">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employees.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={employees.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nic">NIC:</label>
          <input
            type="text"
            id="nic"
            name="nic"
            value={employees.nic}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
