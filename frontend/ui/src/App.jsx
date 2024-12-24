import { useState } from "react";
import Navbar from "./components/Navbar";
import { Footer } from "./components/footer/Footer";
import Employeelist from "./components/employee_list/Employeelist";
import InsertEmployee from "./components/addemployee/insertEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowEmployeeDetails from './components/showemployeedetails/ShowEmployeedetails';
import UpdateDetails from './components/updateform/updateDetails';
import HomePage from "./components/homepage/homepage";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/" element={<Employeelist />} />
          <Route path="/insert" element={<InsertEmployee />} />
          <Route path="/Showdetails/:id" element={<ShowEmployeeDetails/>} />
          <Route path="/updatedetails/:id" element={<UpdateDetails/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
