const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');

// Routes
const perfumeries = require('./routes/perfumeries');

dotenv.config({ path: './config/config.env' });

// Mount Routes
app.use('/api/v1/perfumeries', perfumeries);

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

