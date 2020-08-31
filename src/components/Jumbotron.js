import React from "react";
import EmployeeContainer from "./EmployeeContainer";

const styles = {
    fontStyles: {
        color: "#141469",
        fontFamily: "Playfair Display"
    }
};

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" >
            <div className="container-fluid">
                <h1 style={styles.fontStyles} className="text-center">Employee Directory</h1>
                <p style={styles.fontStyles} className="lead text-center">Search for an employee, or sort by field </p>
                <EmployeeContainer />
            </div>
        </div>
    );
}

export default Jumbotron;