
const express = require('express');
const router = express.Router();

const currencyController = require('../controller/CurrencyController');

router.get('/getAll', currencyController.getAllCurrency);
router.get('/convert', currencyController.convertCurrency);


module.exports=router;