import React from "react";

export const Footer = () => {
  const footerStyle = {
    backgroundColor: "#ecf0f1",
    color: "#CD5C5C",
    padding: "2rem 1rem",
    textAlign: "center",
    marginTop: "8rem",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "1rem",
  };

  const columnStyle = {
    flex: "1 1 200px",
    minWidth: "120px",
    marginBottom: "1rem",
  };

  const headingStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    borderBottom: "2px solid #e83e8c",
    display: "inline-block",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: "0.5rem",
  };

  const linkStyle = {
    color: "#17202a",
    textDecoration: "none",
    fontSize: "0.9rem",
  };

  const socialIconsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  };

  const socialIconLinkStyle = {
    fontSize: "1.5rem",
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Company</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">About Us</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Our Services</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Privacy Policy</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Affiliate Program</a>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Get Help</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">FAQ</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Shipping</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Returns</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Order Status</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Payment Options</a>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Online Shop</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Watch</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Bag</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Shoes</a>
            </li>
            <li style={listItemStyle}>
              <a style={linkStyle} href="#">Dress</a>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Follow Us</h3>
          <div style={socialIconsStyle}>
            <a style={socialIconLinkStyle} href="#"><i className="fab fa-facebook-f"></i></a>
            <a style={socialIconLinkStyle} href="#"><i className="fab fa-twitter"></i></a>
            <a style={socialIconLinkStyle} href="#"><i className="fab fa-instagram"></i></a>
            <a style={socialIconLinkStyle} href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
