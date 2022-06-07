/*          Importamos express para crear el servidor          */
const express = required('express');


/*          Importamos cors para poder conectarse desde otra ip          */
const cors = required('cors');



/*          Creamos el servidor en app          */

const app = express();


/*          Usamos el puerto 3000 para el servidor          */
const port = 3000
app.listen(port,()=>{
    console.log('listen on http://localhost:3000')
})


/*          Cargamos los middlewares          */
app.use(express.json()) // para leer los datos en formato json
app.use(cors()) //para conectar clientes al servidor




/*          Lectura de los datos de la base de datos          */
app.get('/todos',(req,res)=>)

