const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();


userRouter.get('/:userID/orderStatus',userController.handleOrderStatus)

userRouter.post('/newuser',userController.newUser)

userRouter.get('/relogin', userController.relogin)

userRouter.get('/login', userController.login)

module.exports = userRouter;