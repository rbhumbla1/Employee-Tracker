const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const deleteDepartment = (db, deptName) => {

    //delete the department
    const query = `DELETE FROM department WHERE name=(\"${deptName}\")`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }
    })

};

const deleteEmployee = (db, empId) => {

    //delete the employee
    const query = `DELETE FROM employee WHERE id=(\"${empId}\")`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }
    })

};

const deleteRole = (db, role) => {
    //delete the role
    const query = `DELETE FROM role WHERE title=(\"${role}\")`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
        }
    })
};


module.exports = { deleteDepartment, deleteEmployee, deleteRole };