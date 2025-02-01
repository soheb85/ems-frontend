import { useState } from "react";
import { addEmployee } from "./services/employeService";
import { useNavigate } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [error,setError] = useState({
    firstName:"",
    lastName:"",
    email:""
  })

  const navigator = useNavigate();

  

  function saveEmployee(e) {
    e.preventDefault();
    const employee ={firstName,lastName,email}
    console.log(employee);
    setFirstName("")
    setLastName("")
    setEmail("")
    
    if(validateForm()){
      addEmployee(employee).then((res)=>{
        console.log(res.data)
        navigator('/employees')
    });
    }
   
  };

  function validateForm(){
    const errorsCopy = {
      firstName: firstName.trim() ? "" : "First name is required",
      lastName: lastName.trim() ? "" : "Last Name is required",
      email: email.trim() ? "" : "Email is required"
  };

  setError(errorsCopy);

  return !Object.values(errorsCopy).some(error => error);
  }
  return (
    <div className="container">
        <br/><br/>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  value={firstName}
                  className={`form-control ${error.firstName?'is-invalid':''}`}
                  onChange={(e)=> setFirstName(e.target.value)}
                  required
                />
                {error.firstName && <div className="invalid-feedback">{error.firstName}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control ${error.lastName?'is-invalid':''}`}
                  onChange={(e)=> setLastName(e.target.value)}
                  required
                />
                {error.lastName && <div className="invalid-feedback">{error.lastName}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter Employee Email"
                  name="email"
                  value={email}
                  className={`form-control ${error.firstName?'is-invalid':''}`}
                  onChange={(e)=> setEmail(e.target.value)}
                  required
                />
                {error.email && <div className="invalid-feedback">{error.email}</div>}
              </div>

              <button type="submit" onClick={saveEmployee} className="btn btn-success">Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
