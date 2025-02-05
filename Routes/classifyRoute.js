const express = require('express');
const Router = express.Router();
const classify = require('../Controller/classifyController')

Router.get('/classify-number',classify);


module.exports = Router;
