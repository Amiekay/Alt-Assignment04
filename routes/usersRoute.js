const express = require('express')
// const bodyParser = require('body-parser')
const router = express.Router()
const usersController = require('../controller/usersController');
const middleware = require('../middleware/authentication')


router.post('/', middleware.authenticateUser, usersController.createUser)



module.exports= 
    router