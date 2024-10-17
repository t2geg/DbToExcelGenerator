const express = require('express')
const { getOrderDetails } = require('../controllers/orderController')
const router = express.Router()

router.get('/orders', getOrderDetails)
module.exports = router
