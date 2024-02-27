const express = require('express')
// const bodyParser = require('body-parser')
const router = express.Router()
const authentication = require('../middleware/authentication')
const authorsController = require('../controller/authorsController');


router.post('/', authorsController.createItem )

router.get('/', authorsController.getAuthors )

router.get('/:id',authorsController.getOneAuthor )

router.put('/:id', authorsController.updateAuthors)

router.delete('/:id', authorsController.deleteOneAuthor)

module.exports= 
    router
