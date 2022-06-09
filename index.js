/*          Importamos express para crear el servidor          */
const express = required('express');


/*          Importamos cors para poder conectarse desde otra ip          */
const cors = required('cors');



/*          Creamos el servidor en app          */

const app = express();


/*          Usamos el puerto 3000 para el servidor          */
const port = 3000
app.listen(port, () => {
    console.log('listen on http://localhost:3000')
})


/*          Cargamos los middlewares          */
app.use(express.json()) // para leer los datos en formato json
app.use(cors()) //para conectar clientes al servidor


/*          Importamos los metodos de la base de datos          */
const { getProduct, setProduct, updateProduct, deleteProduct } = required('./db/database.methods')


/*          Lectura de los datos de la base de datos          */
app.get('/todos', (req, res) =>{
    getProduct((data)=>{
        res.json(data);
    })
})


/*          Cargar nuevos datos a la base de datos          */
app.post('/todos', (req, res) =>{
    const body = req.body;
    setProduct(body,(data) => {
        res.json(data);
    })
})

/*          Actualizar un dato datos a la base de datos          */
app.patch('/todos/:id', (req, res) =>{
    const {id} = req.params;
    const body = req.body;
    updateProduct(id,body,(data) => {
        res.json(data);
    })
})

/*          Eliminar un dato datos a la base de datos          */
app.delete('/todos/:id', (req, res) =>{
    const {id} = req.params;
    deleteProduct(id,(data) => {
        res.json(data);
    })
})
