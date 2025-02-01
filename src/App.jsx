import "./App.css";
import EmployeeComponent from "./component/EmployeeComponent";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ListEmployeeComponenet from "./component/ListEmployeeComponenet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateEmployee from "./component/UpdateEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            {/* http://localhost:3000*/}
            <Route path="/" element={<ListEmployeeComponenet/>}></Route>

            {/* http://localhost:3000/employees */}
            <Route path="/employees" element={<ListEmployeeComponenet/>}></Route>

            {/* http://localhost:3000/add-employee */}  
            <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
            {/*http://localhost:3000/update-employee */}
            <Route path="/update-employee/:id" element={<UpdateEmployee/>}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
