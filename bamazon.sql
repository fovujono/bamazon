DROP DATABASE IF EXISTS `bamazon`;

CREATE DATABASE `bamazon`;

USE `bamazon`;

CREATE TABLE `products`(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL (10, 2) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO `products` (product_name, department_name, price, stock_quantity)
VALUES ("Umbrella", "Luggage & Travel Gear", 15.00, 100 );


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Headphones", "Electronics", 100.99, 1200);


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Piano", "Musical Instruments",400.00,900);


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Sofa Cover", "Home and Kitchen",30.00, 3000);


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Desk Chair","Office Products", 100.25,45);


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Laptop","Electronics",1000, 2000);


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Sport Shoes","Clothing",55.55, 300);


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Jacket","Clothing", 40.00, 134);


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Perfume", "Beauty & Personal Care", 59.99, 300);


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Pillow", "Home and Kitchen", 15.00, 3000);


INSERT INTO `products` (product_name, department_name,price, stock_quantity)
VALUES ("Apple Juice", "Pantry", 4.00, 555);