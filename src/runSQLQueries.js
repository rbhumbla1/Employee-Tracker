const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');



function addDepartment(db, deptName) {
    
    const query = `INSERT INTO department (name) VALUES (\"${deptName}\")`;

    db.query(query, function (err, results) {
        if (err) {
            console.log(err);
          }
    })

};



module.exports = { addDepartment };