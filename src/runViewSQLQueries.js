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

        query = `SELECT * FROM employee WHERE id = ${empID}`;
        db.query(query, function (err, results) {
            if (err) {
                console.log(err);
            }
        });
    });
}

const viewEmployeesByManager = (db, manager) => {

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

}

module.exports = { viewAllDepartments, viewAllEmployees, viewEmployeesByDepartment, viewEmployeesByManager, viewAllRoles, viewDeptBudget};