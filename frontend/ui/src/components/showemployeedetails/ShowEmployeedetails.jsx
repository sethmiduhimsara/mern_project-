import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import './showDetails.css';


function ShowEmployeeDetail() {
  const [employees, setEmployees] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/employees/${id}`)
      .then((res) => {
        setEmployees(res.data);
      })
      .catch(() => {
        console.log("Error fetching employee details");
      });
  }, [id]);

  const TableItem = (
    <div>
      <table className="custom-table">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{employees._id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{employees.name}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{employees.address}</td>
          </tr>
          <tr>
            <th>NIC</th>
            <td>{employees.nic}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="show-employee-details">
      <div className="header">
        <Link to="/" className="back-button">Back to Main</Link>
      </div>
      <div className="content">
        <h1 className="title">Employee Detail</h1>
        <p className="subtitle">This is the full detail of the employee</p>
        {TableItem}
        <Link
          to={`/updatedetails/${employees._id}`}
          className="edit-button"
        >
          Edit Employee
        </Link>
      </div>
    </div>
  );
}

export default ShowEmployeeDetail;

