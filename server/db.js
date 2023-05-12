const Pool = require('pg').Pool

const pool = new Pool({

    user : "postgres",
    password : "56935422",
    host : "localhost",
    port : 5432,
    database : "jwtauth"

});

module.exports = pool;
