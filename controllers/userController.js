const {User, Shipment} = require("../models/associations");

const handleOrderStatus = async (req,res) => {
    const {userID} = req.params;
    
    // think about the route (what you need to receive from the client) that is connected to this method
    // take a user ID
    // find orders 
    // return the status of the orders

    let yourUser = await User.findByPk(userID);
    let orders = await yourUser.getShipments();
    // let orders = await Shipment.findAll({where: {userId: userID}})
    console.log(orders);
    res.json(orders);
}

module.exports = {
    handleOrderStatus
}