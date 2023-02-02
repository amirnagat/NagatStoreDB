const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const productsRouter = require('./routers/productsRouter');
const app = express();
require('./config/database');
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/products', productsRouter);

app.listen(PORT, () => {
    console.log('Server is listening');
  });