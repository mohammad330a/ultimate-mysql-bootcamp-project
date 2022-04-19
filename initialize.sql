CREATE USER 'test_user'@'localhost';
GRANT ALL PRIVILEGES ON * . * TO 'test_user'@'localhost';

CREATE DATABASE join_us;
USE join_us;

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY ,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users (email) VALUES
('Katie34@yahoo.com'), ('Tunde@gmail.com');

SELECT * FROM users;
