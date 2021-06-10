const mysql = require("mysql");

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:'employees',
    connectionLimit:20,
    port:3306
});
module.exports=pool;