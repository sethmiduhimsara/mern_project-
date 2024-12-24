import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import a CSS file for custom styles

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="content-container">
        <div className="text-section">
          <h1>Go Anywhere With DIGITAL WORLD</h1>
          <p>Request, hop in, and go.</p>
          {/* Add the button below */}
          <Link to="/" className="navigate-button">
           Show Employee
          </Link>
        </div>
        <div className="image-section">
          <img
            src="https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?cs=srgb&dl=pexels-sebastiaan9977-1480690.jpg&fm=jpg"
            alt="Digital World illustration"
            className="illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
