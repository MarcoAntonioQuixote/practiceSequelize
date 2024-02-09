const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

const newUser = async (req,res) => {
    let {name,email,password} = req.body;

    const token = jwt.sign(req.body,'moviesRock',{expiresIn: '30m'});
    
    // const hashedPassword = await bcrypt.hash(password,12)
    // password = hashedPassword;

    // let newUser = await User.create({name,email,password});
    console.log(token)
    res.json({jwt: true, object: token});
}

const relogin = async (req,res) => {
    const {access} = req.body;
    console.log(access);
    const tokenData = jwt.verify(access,'moviesRock');
    console.log('TD', tokenData);
    res.json({relog: true})
}

const login = async (req,res) => {
    let {email,password} = req.body;
    console.log(req.body);
    const userInfo = await User.findOne({where: {email}});
    console.log(userInfo.toJSON());
    const hash = userInfo.password;
    let isMatch = await bcrypt.compare(password,hash);
    console.log(isMatch, 'isMatch')
    res.json({logged: true});
}


module.exports = {
    handleOrderStatus,
    newUser,
    relogin,
    login
}
