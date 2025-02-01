import { useEffect, useState } from "react"
import { deleteEmployee, listEmployee } from "./services/employeService"
import { useNavigate } from "react-router-dom";




const ListEmployeeComponenet = () => {
    const[data,setData] = useState([]);

    useEffect(()=>{
      listEmployee()
      .then((res)=>setData(res.data))
      .catch((err)=>console.log("Error to Fetch the Data",err))
        
    },[])

    const navigator = useNavigate();

    function addNewEmployee(){
        navigator('/add-employee')
    }
    function updateEmploye(id){
      navigator(`/update-employee/${id}`)
    }

    function handleDelete(id){
      deleteEmployee(id)
      .then((res)=>{console.log(res.data)
       window.location.reload(); 
      })
      .catch((err)=>console.log("Error to delete",err))
    }

  return (
    <div className="container mt-5">
      <h2 className="text-center">List Of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
      <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {data.map((employee)=>
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className="btn btn-success ms-3" onClick={()=> updateEmploye(employee.id)} >Update</button>
                  <button type="submit" className="btn btn-danger ms-4" onClick={()=>handleDelete(employee.id)} >Delete</button>
                </td>
            </tr>  
            )}
            
        </tbody>
      </table>
      
    </div>
  )
}

export default ListEmployeeComponenet
