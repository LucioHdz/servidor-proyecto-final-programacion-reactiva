const connection = require('./database.config');
const { v4, uuid } = required('uuid')




/*          Conectamos a la base de datos          */
connection.connect((err, con) => {
    if (err) throw err;
    console.log('Connecting to Dabtabase')
})


/*          obtenemos          */
function getProduct(callback) {
    connection.query('SELECT * from productos').then((err, response) => {
        if (err) throw err;
        callback(response);
    })
}


/*          Agregamos nuevo producto          */
function setProduct(obj, callback) {
    // generamos un id
    const uid = uuid();

    connection.query(`INSERT INTO productos VALUES(${uid},${obj.producto},${obj.descripcion},0,0,0)`).then((err, response) => {
        if (err) throw err;
        callback(response);
    })
}


/*          Actualizamos un producto          */
function updateProduct(id, obj, callback) {
    connection.query(`UPDATE productos 
                    SET 
                    producto = ${obj.producto},
                    descripcion = ${obj.descripcion},
                    cantidad=${cantidad},
                    precio= ${precio},
                    total = ${total}) where id=${id}`)
        .then((err, response) => {
            if (err) throw err;
            callback(response);
        })
}


/*          Eliminamos un producto          */
function deleteProduct(id, callback) {
    connection.query(`Delete productos where id=${id}`)
        .then((err, response) => {
            if (err) throw err;
            callback(response);
        })
}



module.export = {getProduct, setProduct, updateProduct, deleteProduct}