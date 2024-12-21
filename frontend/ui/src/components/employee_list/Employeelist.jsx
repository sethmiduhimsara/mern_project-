import React, { useState, useEffect } from "react";
import axios from "axios";
import Employeecard from "./Employeecard";
import "./employeelist.css"

export const Employeelist = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/employees")
      .then((res) => {
        setEmployees(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("Error while getting data");
      });
  }, []);

  const employeesList =
    employees.length === 0
      ? "no employees found !"
      : employees.map((employees, index) => (<Employeecard  key={index} employees={employees}/>)
      );

  return (
    <div className="showemployee">
      <div className="contaneer">
        <div className="list">{employeesList}</div>
      </div>
    </div>
  );
};

export default Employeelist;
