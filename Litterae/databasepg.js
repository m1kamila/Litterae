const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "2038",
    database: "lit",
})

client.connect();

client.query('Select * from users', (err, res)=>{
    if(!err) {
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }
    client.end;
})