const express = require('express')
const { getUserDetails } = require('../controllers/userController')
const router = express.Router()

router.get('/', getUserDetails)
module.exports = router
