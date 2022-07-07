const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

// Routes
const perfumeries = require('./routes/perfumeries');

//Logging middleware in development 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

// Mount Routes
app.use('/api/v1/perfumeries', perfumeries);

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server and exit
    server.close(() => process.exit(1))
});

