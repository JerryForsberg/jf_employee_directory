import React from "react";
import EmployeeContainer from "./EmployeeContainer";
function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" >
            <div className="container-fluid">

                <p className="lead text-center text-white"></p>
                <EmployeeContainer />
            </div>
        </div>
    );
}

export default Jumbotron;