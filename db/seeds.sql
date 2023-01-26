INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Engineering Lead", 150000, 1),
       ("Engineer", 100000, 1),
       ("Finance Manager", 160000, 2),
       ("Finance Analyst", 120000, 2),
       ("Legal Manager", 170000, 3),
       ("Lawyer", 150000, 3),
       ("Sales Manager", 180000, 4),
       ("Salesperson", 160000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rima", "Bhumbla", 10, null),
       ("Tim", "Allen", 11, 100),
       ("Sarah", "Smith", 12, null),
       ("Joe", "Hayden", 13, 102),
       ("Jamie", "Moore", 14, null),
       ("Dave", "Nagy", 15, 104),
       ("Raj", "Singh", 16, null),
       ("Anu", "Dani", 17, 106);

