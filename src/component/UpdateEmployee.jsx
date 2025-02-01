import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getEmployeeById, updateEmployee } from "./services/employeService";



const UpdateEmployee = () => {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });
    
    const navigator = useNavigate();

    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        getEmployeeById(id)
        .then((res)=>setEmployee(res.data))
        .catch((err)=>console.log("Error to fetch Employee",err))
    },[id])

    function handleEmployee(e){
        setEmployee({...employee,[e.target.name]:e.target.value})
    }
    
   function handleUpdate(e){
    e.preventDefault();
    updateEmployee(id,employee)
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log("Failed to update",err))

    navigator('/employees')
   }
 

   
    
  return (
    <div className="container">
        <br/>
        <div className="card col-md-6 offset-md3 offset-md-3">
            <h2 className="text-center">Update Employee</h2>
            <div className="card-body">
                <form>
                    <div className="form-group mb-2">
                        <label className="form-label">First Name</label>
                        <input type="text" placeholder="Employee First Name" name="firstName" className="form-control" value={employee.firstName} onChange={handleEmployee} />
                        <label className="form-label">Last Name</label>
                        <input type="text" placeholder="Employee Last Name" name="lastName" className="form-control" value={employee.lastName} onChange={handleEmployee} />
                        <label className="form-label">Email</label>
                        <input type="text" placeholder="Employee Email" name="email" className="form-control" value={employee.email} onChange={handleEmployee} /> 
                        <button className="btn btn-success mt-2" onClick={handleUpdate}>Update</button>      
                    </div>
                </form>
            </div>
        </div>
       
    </div>
  )
}

export default UpdateEmployee
