const express = require('express')
const { getOrderDetails } = require('../controllers/orderController')
const router = express.Router()

router.get('/', getOrderDetails)
module.exports = router
