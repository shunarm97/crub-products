
const uuid = require('uuid')
const Products = require('../models/products.models')


const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
}

const createProducts = async (data) => {
    const newProducts = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: true
    })
    return newProducts
}

const getById = async (id) => {
    const data = await Products.findOne({
        where: {
            id : id 
        }
    })
    return data
}

const editProduct = async (id , data) => {
    const response = await Products.update(data, {
        where : {
            id: id
        }
    })
    return response
}

const deleteProducts = async (id) => {
    const data = await Products.destroy({
        where : {
            id : id
        }
    })
    return data
}

module.exports = {
    getAllProducts,
    createProducts,
    getById,
    editProduct,
    deleteProducts
}