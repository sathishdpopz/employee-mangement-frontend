import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import employeeService from "../../services/EmployeeService";

const ListEmployeeComponent = () => {
  /* To create react hooks concept useState method to define the employees array  */
  const [employees, setEmployees] = useState([]);

  /*  useEffect method to perform the action of getting all the employee list in the body of the website */
  useEffect(() => {
    getAllEmployees();
  }, []);

  /* getAllEmployees - this method work the flow of employeeService object to get the axios function of getAllEmployees 
  method then response to the website setEmployees(this method from use state) to the data */
  const getAllEmployees = () => {
    employeeService
      .getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* deleteEmployee - in this method to delete the employee from by the id. That particular action finished then 
  response of website to work the getAllEmployee function*/
  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">List Employee</h2>

      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <Link
                  to={`/edit-employee/${employee.id}`}
                  className="btn btn-info"
                >
                  Update
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
