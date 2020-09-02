# jf_employee_directory

This app allows the user to view the employees in a directory. The user can also sort by field, or enter a search for a specific employee. 

to use the application, use the following Link: jf-employee-directory.netlify.app


This app was created using react and Nodejs.

axios is used to make a get call from a random user generator: https://randomuser.me/

Once the user data is sent back from the api call, we use a stateful component (in the EmployeeContainer component) to map the information returned so that we can take specific datapoints from each employee.

With each datapoint from the object, we create columns and with the name of the data type and rows with the specific data for each employee. 

For the table functionality, including the search option and the sort, we use an npm package called mbdDatatables, which is a react bootstrap data table. You can find the documentation for this datatable here: https://mdbootstrap.com/docs/react/tables/datatables/


We then take the EmployeeContainer, and pass it into the jumbotron, with some slight styling using bootstrap.

We then pass that jumbotron into the app, and display the content to the user.
