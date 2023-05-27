const productService = require('./product.service.js')

const logger = require('../../services/logger.service.js')

async function getProducts(req, res) {
  try {
    logger.debug('Getting Products')
    const products = await productService.query()
    res.json(products)
  } catch (err) {
    logger.error('Failed to get products', err)
    res.status(500).send({ err: 'Failed to get products' })
  }
}

async function getProductById(req, res) {
  try {
    const productId = req.params.id
    const product = await productService.getById(productId)
    res.json(product)
  } catch (err) {
    logger.error('Failed to get product', err)
    res.status(500).send({ err: 'Failed to get product' })
  }
}

module.exports = {
  getProducts,
  getProductById,
}
