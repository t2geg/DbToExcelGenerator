const express = require('express')
const app = express()
const port = 7000
const { Product, User, Order } = require('./models/Schema')

const userRoutes = require('./routes/userRoutes')
const orderRoutes = require('./routes/orderRoutes')
const productRoutes = require('./routes/productRoutes')

const db = require('./config/db') // db is as a promise

app.use(express.json());
// app.get('/orders', async (req, res) => {
//     try {
//         const orders = await Order.find();
//         res.json(orders); // Send the fetched orders as a response
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).json({ error: 'Failed to fetch orders' });
//     }
// });

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);




app.listen(port, () => {
    console.log("server runnning on port " + `${port}`)
})
