
// Import and require mysql2 & inquirer
const mysql = require('mysql2');
const inquirer = require('inquirer');
//helper file
const {addDepartment} = require('./src/runSQLQueries.js');



// An array of questions for user input on what action they want to perform
const chooseAction = [
  {
    type: 'list',
    message: 'Hi! What would you like to do?  Please select an action:',
    name: 'action',
    choices: ['Add a Department', 'Add an Employee', 'Add a Role', 'Delete a Departments', 'Delete an Employee', 'Delete a Role', 'Update an Employee\'s Manager', 'Update an Employee Role', 'View all Departments', 'View all Employees', 'View Employees by Department', 'View Employees by Manager', 'View all Roles', 'View the Total Utilized Budget of a Department', 'Quit']
  }
]
//question specific to an department
const getDepartmentInfo = [
  {
      type: 'input',
      message: 'Please provide the name of the new department:',
      name: 'deptName',
  },
]


// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'root', //******************put it in diff file */
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

function printLogo() {
  console.log("**********************");
  console.log("*                    *");
  console.log("*  EMPLOYEE TRACKER  *");
  console.log("*                    *");
  console.log("**********************");

};


async function init() {
  let finish = false;

  printLogo();

  while (!finish) {

    let response = await inquirer.prompt(chooseAction);

    action = response.action;

    switch (action) {
      case "Add a Department":
        console.log("add a dept");
        await inquirer
          .prompt(getDepartmentInfo)
          .then((info) => {
            //create new department
            addDepartment(db, info.deptName);
            console.log("Added the new department: ", info.deptName);
          }
          );
        break;
      case "Add an Employee":
        console.log("add an employee");
        break;
      case "Add a Role":
        console.log("add a role");
        break;
      default:
        finish = true;
        console.log("Goodbye!");
        db.end();
        break;
    }

  }
}

init();


