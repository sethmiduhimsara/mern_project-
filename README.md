Employee Management System
A comprehensive employee management system built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The system allows organizations to efficiently manage their employee data with a modern and intuitive interface.
Features

Employee data management (Create, Read, Update, Delete)
Responsive and modern user interface
Secure authentication system
Real-time data updates
User-friendly dashboard
Employee information tracking
Search and filter capabilities

Technologies Used
Frontend

React.js
HTML5/CSS3
Material-UI/Bootstrap (for styling)
Axios (for API requests)

Backend

Node.js
Express.js
MongoDB
Mongoose ODM

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
MongoDB
npm or yarn package manager

Installation

Clone the repository

bashCopygit clone https://github.com/sethmiduhimisara/mern_project.git
cd mern_project

Install dependencies for backend

bashCopycd backend
npm install

Install dependencies for frontend

bashCopycd frontend
npm install

Configure environment variables
Create a .env file in the backend directory and add:

CopyMONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
Running the Application

Start the backend server

bashCopycd backend
npm start

Start the frontend application

bashCopycd frontend
npm start
The application will be available at http://localhost:3000
Project Structure

GET /api/employees - Get all employees
POST /api/employees - Create new employee
GET /api/employees/:id - Get specific employee
PUT /api/employees/:id - Update employee
DELETE /api/employees/:id - Delete employee

Contributing

Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.
Contact
Your Name - @sethmiduhimisara
Project Link: https://github.com/sethmiduhimisara/mern_project
