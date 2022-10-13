const express = require('express')


const db = require('./utils/database')

const initModels = require('./models/initModels')

const productsRouter = require('./product/products.router')

const app = express()

const {port} = require('./config')

//? estan correctas las credenciales
db.authenticate()
    .then(() => console.log('DB autentication succesfully'))
    .catch((err) => console.log(err))

//? sincronizacion de los modleos de las base de datos y creacion de las tablas
db.sync()
    .then(() => console.log('DataBase Synced'))
    .catch((err) => console.log(err) )

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'all ok'})
})

app.use('/api/v1/products', productsRouter)

app.listen(port, () => {
    console.log(`Sever started at port ${port}`)
})