-- For contact us form

create database contactus;

create table users (
id INT PRIMARY KEY AUTO_INCREMENT not null,
name VARCHAR(50) not null,
email VARCHAR(50) not null,   
title VARCHAR(50) null,   
msg VARCHAR(500) null,   
created_at timestamp default current_timestamp
)

select * from users;

INSERT INTO users(name, email, title, msg) VALUES ('PRO CALIBER LACROSSE','lacrosse@gmail.com', 'lacrosse', 'I love lacrosse');

create table newsletter (
    id INT PRIMARY KEY AUTO_INCREMENT not null,
    name VARCHAR(50) not null,
    email VARCHAR(50) not null,
    created_at timestamp default current_timestamp
);

select * from users;