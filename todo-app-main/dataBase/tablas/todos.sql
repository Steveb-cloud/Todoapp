CREATE TABLE todos
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL ,
    description VARCHAR(500) NULL,
    complete BIT,
    created_at TIMESTAMP DEFAULT NOW()
)