import React from "react";
import EmployeeContainer from "./EmployeeContainer";
function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" >
            <div className="container-fluid">
                <h1 className="text-center">Employee Directory</h1>
                <p className="lead text-center">Find an employee, or sort by field </p>
                <EmployeeContainer />
            </div>
        </div>
    );
}

export default Jumbotron;