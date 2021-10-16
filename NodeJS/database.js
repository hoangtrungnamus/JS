var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "halanmarket"
})

conn.connect(function(err){
    if(err) throw err;
    var sql = 'SELECT * FROM CUSTOMER LIMIT 1,3';
    conn.query(sql, function(err, result){
        if(err) throw err;
        console.log(result);
    })
})

