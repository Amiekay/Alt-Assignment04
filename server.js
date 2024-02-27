const express = require("express")
const logger = require('morgan')
const authorsRouter = require('./routes/authorRoute');
const usersRouter = require('./routes/usersRoute');

const app = express()

const bodyParser = require('body-parser')


app.use(logger('dev'));


app.use(express.static('public'))


app.use(bodyParser.json())

app.use('/users', usersRouter)

app.use('/authors', authorsRouter)


// app.use((req, res, next)=>{
//     const apiKey = req.body.apiKey;

// console.log(apiKey)
//     if(apiKey === 'abcd'){
//         next();
//     }
//     else{
//         res.status(404).send('unauthorized api')
//     }
// })




app.get('*',(req, res)=>{
    res.status(404)
    res.send('Invalid url')
})






app.listen(3300, ()=>{
    console.log('server started successfully')
})

