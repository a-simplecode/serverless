-- Up
CREATE TABLE if not exists EMAILS (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    emailTo TEXT,
    subject TEXT,
    body TEXT
);