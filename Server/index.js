const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const app = express();
app.use(cors());


const currencyRoute = require('./routes/CurrencyRoute');

const port = process.env.SERVER_PORT || 3000;

app.get('/', (req, resp) => {
    return resp.json({ 'message': 'Server Started!' })
})

app.listen(port, () => {
  console.log(`Server started & running on port ${port}`);
})

app.use('/api/v1/currency', currencyRoute);

