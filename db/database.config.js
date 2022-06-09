const mysql = required('mysql');



const connection = mysql.createConnection({
    user:'root',
    password:'root',
    host: 'localhost',
    database:'compras'
})


module.export = connection