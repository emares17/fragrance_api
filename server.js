const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' });

// Routes
const perfumeries = require('./routes/perfumeries');

//Logging middleware in development 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

// Mount Routes
app.use('/api/v1/perfumeries', perfumeries);

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

