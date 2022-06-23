const productos=[]

const getProductos = (req, res) => {
    res.render('productos.ejs', {productos} )

}

const postProductos = (req, res) => {
    const { producto, precio, thumbnail } = req.body
    productos.push({ producto, precio, thumbnail })
    res.redirect('/productos')
}
const productosCargados = (req, res) => {
    res.render('productosCargados.ejs', {productos} )
}
module.exports = {
    getProductos,
    postProductos,
    productosCargados
}