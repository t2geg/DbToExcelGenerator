const express = require('express')
const app = express()
const port = 7000
const { Product, User, Order } = require('./models/Schema')
const db = require('./config/db')

app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders); // Send the fetched orders as a response
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});



app.listen(port, () => {
    console.log("server runnning on port " + `${port}`)
})
