const router = require('express').Router()

const productsServices = require('./products.services')

router.get('/', productsServices.getAllProducts)
router.post('/', productsServices.postProduct)
router.get('/:id', productsServices.getById)
router.patch('/:id', productsServices.editProduct)
router.delete('/:id', productsServices.deleteProducts)
module.exports = router