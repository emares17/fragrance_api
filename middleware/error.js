const ErrorResponse = require("../utility/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;
    
    console.log(err);

    // Bad Mongoose object ID 
    if (err.name === 'CastError') {
        const message = `Resource not found with an id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorResponse(messsage, 400);
    }

    if(err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;