DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE  burger_db;


CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger VARCHAR(30),
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
)