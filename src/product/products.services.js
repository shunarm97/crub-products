const { response } = require('express')
const productsControlles = require('./products.controllers')


const getAllProducts = (req, res) => {
    productsControlles.getAllProducts()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(200).json({message: err.message})
    })
}

const postProduct = (req, res) => {
    const data = req.body
    if(data.name && data.category && data.price) {
        productsControlles.createProducts(data)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({messsage: err.message})
        })
    } else {
        res.status(400).json({message: 'missing data'})
    }
}


const getById = (req, res) => {
    const id = req.params.id
    productsControlles.getById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const editProduct = (req, res) => {
    const id = req.params.id
    const {name, category, price, isAvailable} = req.body
    productsControlles.editProduct(id, {name, category, price, isAvailable})
    .then(response => {
        if(response[0]) {
            res.status(200).json({message: `Products with id ${id} edit succesfully`})
        } else {
            res.status(400).json({message: 'invalid id'})
        }
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

const deleteProducts = (req, res) => {
    const id = req.params.id
    productsControlles.deleteProducts(id)
    .then(response => {
        if(response){
            res.status(204).json()
        } else {
            res.status(400).json({message: 'invalid id'})
        }
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

module.exports = {
    getAllProducts,
    postProduct,
    getById,
    editProduct,
    deleteProducts
}