const { Product } = require('../models/Schema')

const getProductDetails = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products)

    } catch (error) {
        res.status(500).json({ message: 'Error fetching Products details' })
    }
}

module.exports = { getProductDetails }