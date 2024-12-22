import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Employeecard = ({ employees }) => {
  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:3000/api/employees/${id}`)
      .then(() => {
        window.location.reload(); // Consider updating state instead of reloading
      })
      .catch((err) => {
        console.error("Delete error", err);
      });
  };

  return (
    <div style={styles.container}>
      {/* Employee Card 1 */}
      <div style={styles.card}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKF89f2C2_QR3A5ChFVsTdELBNCuv4TjWZA&s"
          alt="John Doe"
          style={styles.image}
        />
        <div style={styles.content}>
          <h3 style={styles.title}>{employees.name}</h3>
          <p style={styles.text}>{employees.employeeID}</p>
          <p style={styles.text}>{employees.address}</p>
          <p style={styles.text}>{employees.nic}</p>
        </div>
        <div style={styles.actions}>
          <button
            style={styles.button}
            onClick={() => onDeleteClick(employees._id)}
          >
            Delete
          </button>

          {/* update */}

          <Link to={`/Showdetails/${employees._id}`} style={styles.button}>
            Update
          </Link>


        </div>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  title: {
    margin: "0 0 10px",
    fontSize: "1.5em",
    color: "#333",
  },
  text: {
    margin: "5px 0",
    color: "#555",
  },
  actions: {
    padding: "15px",
    borderTop: "1px solid #eee",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Employeecard;
