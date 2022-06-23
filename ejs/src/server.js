const express = require("express")
const app = express()
const puerto = 8080
const path = require("path")
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('views',path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use('/', rutas)


app.listen(puerto, (err) =>{

    if (err){
        console.log(`Se ha producido un error ${err}`)

    } else{
        console.log(`Servidor escuchando desde el puerto ${puerto}`)
    }

})
 

