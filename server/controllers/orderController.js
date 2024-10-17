const { Order } = require('../models/Schema')

const getOrderDetails = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (e) {
        res.status(500).json({ message: 'Error fetching order details' })
    }
}

module.exports = { getOrderDetails };