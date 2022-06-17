import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/addEmployee/AddEmployee";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListEmployeeComponent from "./components/listEmployeeComponents/ListEmployeeComponent";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />}></Route>
            <Route
              path="/employees"
              element={<ListEmployeeComponent />}
            ></Route>
            <Route path="/add-employee" element={<AddEmployee />}></Route>
            <Route path="/edit-employee/:id" element={<AddEmployee />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
