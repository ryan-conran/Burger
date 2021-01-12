DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Texas Burger');
INSERT INTO burgers (burger_name) VALUES ('Elvis Burger');