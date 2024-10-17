const express = require('express')
const { getProductDetails } = require('../controllers/productController')
const router = express.Router()

router.get('/products', getProductDetails)
module.exports = router
