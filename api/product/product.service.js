const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const utilService = require('../../services/util.service')
const ObjectId = require('mongodb').ObjectId

async function query() {
    try {
        const collection = await dbService.getCollection('products')
        var products = await collection.find().toArray()
        return products
    } catch (err) {
        logger.error('cannot find products', err)
        throw err
    }
}

async function getById(productId) {
    try {
        const collection = await dbService.getCollection('products')
        const product = collection.findOne({ _id: ObjectId(productId) })
        return product
    } catch (err) {
        logger.error(`while finding product ${productId}`, err)
        throw err
    }
}

module.exports = {
    query,
    getById
}
