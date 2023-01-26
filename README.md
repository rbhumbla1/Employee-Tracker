# Employee Tracker
Employee Tracker is a  command-line CMS application to manage a company's employee database, using Node.js, Inquirer, and MySQL

## Description

Employee Tracker application enables the user to view and manage the departments, roles, and employees in their company
so that they can I organize and plan their business.  Here are the main features of the application:

* When the application is started, the user is presented with the following options:
    * Add a Department
    * Add an Employee
    * Add a Role
    * Delete a Department
    * Delete an Employee
    * Delete a Role
    * Update an Employee's Role
    * Update an Employee's Manager
    * Update an Employee Role
    * View all Departments
    * View all Employees
    * View Employees by Department
    * View Employees by Manager
    * View all Roles
    * View the Total Utilized Budget of a Department
    * Quit
* When the user choose to add a department, they are prompted to enter the name of the department and that department is added to the database
* When the userchoose to add an employee, they are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
* When the user choose to add a role, they are prompted to enter the name, salary, and department for the role and that role is added to the database
* When the user choose to delete a department, they are prompted to enter the name of the department and that department is deleted in the database
* When the user choose to delete an employee, they are prompted to enter Employee ID(to make sure correct Employee is chosen in case of duplicates) and that employee is deleted in the database
* When the user choose to delete a role, they are prompted to enter the title of the role and that role is deleted in the database
* When the user choose to update an employee role, they are prompted to select an employee by Employee ID (to make sure that the correct employee is updated) to update and their new role and this information is updated in the database 
* When the user choose to update an employee manager, they are prompted to select an employee by Employee ID (to make sure that the correct employee is updated in case of multiple employees of same name) to update and their new manager by Manager ID (to make sure that the correct manager is added in case of multiple managers with same name) and this information is updated in the database
* When the user choose to view all department, they are presented with a formatted table showing department names and department ids
* When the user choose to view all employees, they are presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
* When the user choose to view all roles, they are presented with the job title, role id, the department that role belongs to, and the salary for that role.
* When the user chooses to view the total utilized budget for a department, they are prompted to enter the name of the deparment and are then presented with department id and the total budget for it.

## Technology Used

* Uses the [inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).
* Uses the [mysql2 package](https://www.npmjs.com/package/mysql2) 
* Uses the [console.table package](https://www.npmjs.com/package/jconsole.table) 

## Installation

  To install necessary dependencies, run the following command:
  ```
  npm i
  ```
  To install necessary database, schema and seed data, run the following commands in mysql2 CLI:
  ```
  source db/schema.sql
  source db/seeds.sql
  ```

## Schema Used
Schema plan can be found here: ![Schema](./assets/images/Employee_tracker_Schema.png)

## Mock-Up

Demo of Project: [Employee Tracker Demo on Google Drive](https://drive.google.com/file/d/1m7W1FfVjCxuI6oazFl0zihe1y1DuNjzH/view?usp=sharing) 
                  OR [MP4 Demo File in Project](./dist/assets/images/Employee-Tracker.mp4)

Application Screenshot:

![Application Screenshot](./dist/assets/images/App_Screenshot.JPG)

## Usage
1. You can access the file in GitHub repository: https://github.com/rbhumbla1/Employee-Tracker
2. Run the application in the terminal using this command: 
```
node index.js
```

## License
None

## Contributing

Contact owner

## Questions

  If you have any questions about the repository and project, or would like to open an issue or would like to contact me for contributing or any other subject, you can do so at rima.bhumbla@gmail.com. You can welcome to see more of my work at https://github.com/rbhumbla1.
