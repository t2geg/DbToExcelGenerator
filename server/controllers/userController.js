const { User } = require('../models/Schema')

const getUserDetails = async (req, res) => {
    try {
        const userDetails = await User.find();
        res.json(userDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching User details' })
    }
}

module.exports = { getUserDetails }