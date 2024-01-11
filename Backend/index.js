const express = require('express')
const cors = require('cors')
const conectarDB = require('./config/db')
// crer el servidor
const app = express()
//Conexion a la BD
conectarDB()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hola Mundo')
}) 

app.use('/api/juegos',require('./routes/gamesRoute'))
app.use('/api/users',require('./routes/usersRoute'))

app.listen(4600, ()=>{
    console.log('El servidor se esta ejecutando')

})