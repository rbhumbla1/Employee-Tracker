DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE
    department (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL
    );

CREATE TABLE
    role (
        id INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT,
        CONSTRAINT fk_department
        FOREIGN KEY (department_id) 
        REFERENCES department(id) 
        ON DELETE SET CASCADE
    )  AUTO_INCREMENT = 10;

CREATE TABLE
    employee (
        id INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT,
        manager_id INT,
        CONSTRAINT fk_role
        FOREIGN KEY (role_id)
        REFERENCES role(id) 
        ON DELETE SET NULL
    )  AUTO_INCREMENT = 100;
