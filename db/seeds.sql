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

select * from employee join (select role.id as rid, department_id from role join department on role.department_id = department.id) as RD ON employee.role_id = RD.rid and RD.department_id = 3;

select role.id as rid, department_id from role join department on role.department_id = department.id;

SELECT favorite_books.book_name As name, book_prices.price As price
FROM favorite_books
JOIN book_prices ON book_prices.id = favorite_books.book_price;



