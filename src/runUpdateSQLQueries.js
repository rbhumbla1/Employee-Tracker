const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const addDepartment = (db, deptName) => {

    //insert the department
    const query = `INSERT INTO department (name) VALUES (\"${deptName}\")`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }
    })

};

const addEmployee = (db, fName, lName, role, manager) => {

    let query;
    let roleId;
    let empId;

    //get the role id from role name
    query = `SELECT id FROM role WHERE title = \"${role}\"`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }

        roleId = results[0].id;

        //get the manager id from manager name
        let nArr = manager.split(" ");
        query = `SELECT id FROM employee WHERE first_name = \"${nArr[0]}\" and last_name = \"${nArr[1]}\"`;
        db.query(query, function (err, results) {
            if (err) {
                console.log(err);
            }
            empId = results[0].id;

            //insert the employee
            query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (\"${fName}\", \"${lName}\", ${roleId}, ${empId})`;
            db.query(query, function (err, results) {
                if (err) {
                    console.log(err);
                }
            })
        });
    });
}

const addRole = (db, title, salary, dept) => {
    let query;
    let deptId;

    //get the role id from role name
    query = `SELECT id FROM department WHERE name = \"${dept}\"`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }

        deptId = results[0].id;

        //insert the role
        query = `INSERT INTO role (title, salary, department_id) VALUES (\"${title}\", ${salary}, ${deptId})`;

        db.query(query, function (err, results) {
            if (err) {
                console.log(err);
            }
        });

    });
}

const updateManager = (db, empID, mgrID) => {
    let query;

    query = `UPDATE employee SET manager_id = ${mgrID} WHERE id = ${empID}`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }
    });
}

const updateRole = (db, empID, role) => {
    let query;
    let roleId;

    //get the role id from role name
    query = `SELECT id FROM role WHERE title = \"${role}\"`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }

        roleId = results[0].id;

        query = `UPDATE employee SET role_id = ${roleId} WHERE id = ${empID}`;
        db.query(query, function (err, results) {
            if (err) {
                console.log(err);
            }
        });
    });
}

module.exports = { addDepartment, addEmployee, addRole, updateManager, updateRole };