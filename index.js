
// Import and require mysql2 & inquirer
const mysql = require('mysql2');
const inquirer = require('inquirer');
//helper file
const { addDepartment, addEmployee, addRole, updateManager, updateRole } = require('./src/runUpdateSQLQueries.js');
const { deleteDepartment, deleteEmployee, deleteRole } = require('./src/runDeleteSQLQueries.js');
const { viewAllDepartments, viewAllEmployees, viewEmployeesByDepartment, viewEmployeesByManager, viewAllRoles, viewDeptBudget } = require('./src/runViewSQLQueries.js');


// An array of questions for user input on what action they want to perform
const chooseAction = [
  {
    type: 'list',
    message: 'Hi! What would you like to do?  Please select an action:',
    name: 'action',
    choices: ['Add a Department', 'Add an Employee', 'Add a Role', 'Delete a Department', 'Delete an Employee', 'Delete a Role', 'Update an Employee\'s Manager', 'Update an Employee Role', 'View all Departments', 'View all Employees', 'View Employees by Department', 'View Employees by Manager', 'View all Roles', 'View the Total Utilized Budget of a Department', 'Quit']
  }
];

//question specific to a department
const getDepartmentInfo = [
  {
    type: 'input',
    message: 'Please provide the name of the department:',
    name: 'deptName',
  },
];

//question specific to an employee
const getEmployeeInfo = [
  {
    type: 'input',
    message: 'Please provide the first name of the employee:',
    name: 'fName',
  },
  {
    type: 'input',
    message: 'Please provide the last name of the employee:',
    name: 'lName',
  },
  {
    type: 'input',
    message: 'Please provide the role of the employee:',
    name: 'role',
  },
  {
    type: 'input',
    message: 'Please provide the name of the manager of the employee:',
    name: 'manager',
  },
];

//question specific to a role
const getRoleInfo = [
  {
    type: 'input',
    message: 'Please provide the title of the role:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please provide the salary of the role:',
    name: 'salary',
  },
  {
    type: 'input',
    message: 'Please provide the department the role belong to:',
    name: 'dept',
  },
];

//question to get employee ID for make sure we are handinling the unique employee
const getEmployeeID = [
  {
    type: 'input',
    message: 'Please provide the ID of the employee:',
    name: 'empID',
  },
];

//question to get manager ID for make sure we are handinling the unique employee
const getManagerID = [
  {
    type: 'input',
    message: 'Please provide the ID of the new manager:',
    name: 'mgrID',
  },
];


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
  let empID;

  printLogo();

  while (!finish) {

    let response = await inquirer.prompt(chooseAction);

    action = response.action;

    switch (action) {
      case "Add a Department":
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
        await inquirer
          .prompt(getEmployeeInfo)
          .then((info) => {
            //create new department
            addEmployee(db, info.fName, info.lName, info.role, info.manager);
            console.log("Added the new employee: ", info.fName, " ", info.lName);
          }
          );
        break;
      case "Add a Role":
        await inquirer
          .prompt(getRoleInfo)
          .then((info) => {
            //create new department
            addRole(db, info.title, info.salary, info.dept);
            console.log("Added the new role: ", info.title);
          }
          );
        break;
      case "Delete a Department":
        await inquirer
          .prompt(getDepartmentInfo)
          .then((info) => {
            //delete department
            deleteDepartment(db, info.deptName);
            console.log("Deleted department: ", info.deptName);
          }
          );
        break;
      case "Delete an Employee":
        await inquirer
          .prompt(getEmployeeID)
          .then((info) => {
            //delete employee
            deleteEmployee(db, info.empID);
            console.log("Deleted the employee: ", info.empID);
          }
          );
        break;
      case "Delete a Role":
        await inquirer
          .prompt(getRoleInfo[0])
          .then((info) => {
            //delete role
            deleteRole(db, info.title);
            console.log("Deleted the role: ", info.title);
          }
          );
        break;
      case "Update an Employee\'s Manager":
        await inquirer
          .prompt(getEmployeeID)
          .then((info) => {
            empID = info.empID;
          }
          );
        await inquirer
          .prompt(getManagerID)
          .then((info1) => {
            //update manager
            updateManager(db, empID, info1.mgrID);
            console.log("Updated the mnanager for: ", empID);
          }
          );
        break;
      case "Update an Employee Role":
        await inquirer
          .prompt(getEmployeeID)
          .then((info) => {
            empID = info.empID;
          }
          );
        await inquirer
          .prompt(getRoleInfo[0])
          .then((info) => {
            updateRole(db, empID, info.title);
            console.log("Updated the role for: ", empID);
          }
          );
        break;
      case "View all Departments":
        viewAllDepartments(db);
        break;
      case "View all Employees":
        viewAllEmployees(db);
        break;
      case "View Employees by Department":
        await inquirer
          .prompt(getDepartmentInfo)
          .then((info) => {
            viewEmployeesByDepartment(db, info.deptName);
          }
          );
        break;
      case "View Employees by Manager":
        await inquirer
          .prompt(getManagerID)
          .then((info) => {
            viewEmployeesByManager(db, info.mgrID);
          }
          );
        break;
      case "View all Roles":
        viewAllRoles(db);
        break;
      case "View the Total Utilized Budget of a Department":
        await inquirer
          .prompt(getDepartmentInfo)
          .then((info) => {
            viewDeptBudget(db, info.deptName);
          }
          );
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


