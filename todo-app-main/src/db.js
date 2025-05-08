import pg from 'pg';

const dbClient = new pg.Pool({
    host: 'steven-todo.cbuucgiqsve2.us-west-2.rds.amazonaws.com',
    user: "postgres",
    password: "Password.123",
    database: "todo",
    port: 5432,

    ssl: {
        rejectUnauthorized: false,
    }
});

/*
const client = await dbClient.connect();

var {rows} = await client.query("Select NOW()");
console.log(rows[0]);
client.release();*/

export {dbClient}