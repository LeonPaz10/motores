const {Router} = require('express')
const router = Router()
const { getProductos, postProductos, productosCargados } = require('../controllers/productosController')

router.get('/', getProductos)
router.post('/productos', postProductos)
router.get('/productos', productosCargados)


module.exports = router