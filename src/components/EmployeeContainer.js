import React, { Component } from "react";
import getEmployees from "../utils/API";
import Jumbotron from "./Jumbotron";
import { MDBDataTableV5 } from 'mdbreact';

class EmployeeContainer extends Component {
    state = {
        employees: [],
        info: []
    };


    componentDidMount() {
        this.loadInitialEmployees();
    }

    loadInitialEmployees = () => [
        getEmployees()
            .then(response => response.data.results)
            .then(data => { this.setState({ employees: data }) })
            .then(async () => {
                this.setState({ info: this.employeeInfo(), isLoading: false })
                // .catch((err) => { console.log(err); })

            })
    ];





    employeeInfo = () => {
        let employees = this.state.employees.map((employee) => {
            return (
                {
                    photo: <img
                        src={employee.picture.large}
                        alt='employee'
                    />,
                    firstName: employee.name.first,
                    lastName: employee.name.last,
                    phoneNumber: employee.phone,
                    city: employee.location.city,
                    email: employee.email,
                    cell: employee.cell


                }
            )
        });
        return employees;
    }


    render() {

        const datatable = {
            columns: [
                {
                    label: 'photo',
                    field: 'photo',
                    sort: 'disabled',
                    width: 200

                },
                {
                    label: 'First Name',
                    field: 'firstName',
                    width: 150,


                },
                {
                    label: 'Last Name',
                    field: 'lastName',
                    width: 150,


                },
                {
                    label: 'City',
                    field: 'city',
                    width: 200,

                },
                {
                    label: 'Email',
                    field: 'email',
                    width: 200,

                },
                {
                    label: 'Phone',
                    field: 'phoneNumber',
                    width: 200,
                },
                {
                    label: 'Cell',
                    field: 'cell',
                    width: 200,
                }
            ],
            rows: this.state.info
        }


        return (
            <div>

                < MDBDataTableV5 hover
                    entriesOptions={[10, 25]}
                    entries={10}
                    pagesAmount={5}
                    data={datatable}
                    pagingTop
                    searchTop
                    searchBottom={false}
                />
            </div>
        );

    }
}

export default EmployeeContainer;


 // filterEmployees = () => {
    //     // go through array of current employees with a filter, and if they match filter keep them in array
    //     const filteredEmployees = this.state.employees.filter(employee => {
    //         if (employee.name == this.state.searchFilter) {
    //             return true;
    //         }
    //     });
    //     console.log("searching for employee with exact match of ", this.state.searchFilter);
    //     console.log("new filtered list is ", filteredEmployees)

    //     this.setState({
    //         employees: filteredEmployees
    //     });
    // }



