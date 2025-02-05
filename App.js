const express = require('express')
const cors = require('cors')
const morgan =require('morgan')
const classify = require('./Routes/classifyRoute')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(morgan('dev'))

app.use('/api',classify)

app.use('/',(req,res,next)=>{
    res.send('welcome to HNG12 task 1')
})

app.use((error,req,res,next) =>{
    res.status(500).json({
        message: 'Server in the main app failed to start',
        error: error.message,
    });
});

module.exports = app;