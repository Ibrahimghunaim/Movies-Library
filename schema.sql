CREATE TABLE IF NOT EXISTS favMovies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    readyInMinutes INTEGER,
    summary VARCHAR(10000),);
    