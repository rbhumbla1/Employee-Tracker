const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const viewAllDepartments = (db) => {
    let query;

    query = `SELECT * FROM department`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }
        console.log("\n");
        console.table(results);
    });
}

const viewAllEmployees = (db) => {
    let query;

    query = `SELECT * FROM employee`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }
        console.log("\n");
        console.table(results);
    });
}

const viewEmployeesByDepartment = (db, dept) => {
    let query;
    let deptId;

    //get the role id from role name
    query = `SELECT id FROM department WHERE name = \"${dept}\"`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }

        deptId = results[0].id;

        query = `SELECT * FROM employee JOIN (SELECT role.id AS rid, department_id FROM role JOIN department ON role.department_id = department.id) AS roleDeptJoin ON employee.role_id = roleDeptJoin.rid and roleDeptJoin.department_id = ${deptId}`;

        db.query(query, function (err, results) {
            if (err) {
                console.log(err);
            }
            console.log("\n");
            console.table(results);
        });
    });
}

const viewEmployeesByManager = (db, mgrId) => {
    let query;

    query = `SELECT * FROM employee WHERE manager_id = ${mgrId}`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }
        console.log("\n");
        console.table(results);
    });

}

const viewAllRoles = (db) => {
    let query;

    query = `SELECT * FROM role`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }
        console.log("\n");
        console.table(results);
    });

}

const viewDeptBudget = (db, dept) => {
    let query;
    let deptId;

    // const db1 = mysql.createConnection(
    //     {
    //       host: '127.0.0.1',
    //       // MySQL username,
    //       user: 'root',
    //       // MySQL password
    //       password: 'root', //******************put it in diff file */
    //       database: 'employee_db'
    //     },
    //     console.log(`Connected to the employee_db database.`)
    //   );

    //get the role id from role name
    query = `SELECT id FROM department WHERE name = \"${dept}\"`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }

        deptId = results[0].id;

        query = `SELECT department_id, SUM(salary) FROM role WHERE department_id = ${deptId}`;
       

        const db2 = mysql.createConnection(
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

        db2.query(query, function (err, results1) {
            if (err) {
                console.log(err);
            }
            console.log("\n");
            
            console.table(results1);
        });

        db2.end();
    });

}

module.exports = { viewAllDepartments, viewAllEmployees, viewEmployeesByDepartment, viewEmployeesByManager, viewAllRoles, viewDeptBudget };