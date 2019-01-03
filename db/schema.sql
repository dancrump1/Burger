CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
    id int(30) auto_increment primary key,
    burger_name varchar(30),
    devoured boolean
)