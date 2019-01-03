let mysql = require('mysql');
let PORT = 3306 || process.env.PORT;

let connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: "12345678",
    database: "burgers_db"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected on port: "+PORT);
});

module.exports = connection;