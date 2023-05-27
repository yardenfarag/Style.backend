const express = require('express')
const { checkout } = require('./payment.controller')

const router = express.Router()

router.post('/payment', checkout)

module.exports = router