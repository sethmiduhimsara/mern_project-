import { useState } from "react";
import Navbar from "./components/Navbar";
import { Footer } from "./components/footer/Footer";
import Employeelist from "./components/employee_list/Employeelist";
import InsertEmployee from "./components/addemployee/insertEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Employeelist />} />
          <Route path="/insert" element={<InsertEmployee />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
