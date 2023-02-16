const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const con = mysql.createConnection(config);
const sql = 'select * from people';
let peopleList = [];
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
        if (err) throw err;
        peopleList = result;
    });
});

app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle Rocks!!</h1> <ul> ${peopleList.map(item => `<li>${item.name} </li>`).join('')} </ul>`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});






