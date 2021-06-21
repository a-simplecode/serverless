-- Up
CREATE TABLE EMAILS (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    emailTo TEXT,
    subject TEXT,
    body TEXT
);


INSERT INTO EMAILS (firstName, lastName, email, emailTo, subject, body) 
VALUES ('amine', 'amine','amine.amine@isae.edu.lb','amine.ctserv@gmail.com', 'test','');

INSERT INTO EMAILS (firstName, lastName, email, emailTo, subject, body) 
VALUES ('Dominique', 'amine','dom@dom.com','amine.ctserv@gmail.com', 'test2','');

-- Down
DROP TABLE EMAILS;