const Perfumeries = require('../models/Perfumeries');

// Description: Get all perfumeries
// Route: GET /api/v1/perfumeries
exports.getPerfumeries = async (req, res, next) => {
    try {
        const perfumeries = await Perfumeries.find();
        res.status(200).json({ 
            success: true, 
            count: perfumeries.length,
            data: perfumeries
        });
    } catch(err) {
        res.status(400).json({
            success: false
        });
    }
}

// Description: Get single perfumeries
// Route: GET /api/v1/perfumeries/:id
exports.getPerfumery = async (req, res, next) => {
    try {
        const perfumery = await Perfumeries.findById(req.params.id);

        if (!perfumery) {
            return res.status(400).json({
                success: false
            });
        }

        res.status(200).json({ 
            success: true, 
            data: perfumery
        });
    } catch(err) {
        res.status(400).json({
            success: false
        });
    }
}

// Description: Create new perfumeries
// Route: POST /api/v1/perfumeries
exports.createPerfumery = async (req, res, next) => {
    try {
        const perfumery = await Perfumeries.create(req.body);
        res.status(201).json({
            success: true,
            data: perfumery
        });
    } catch(err) {
        res.status(400).json({
            success: false
        });
    }
};

// Description: Update perfumeries
// Route: PUT /api/v1/perfumeries/:id
exports.updatePerfumery = async (req, res, next) => {
    try{
        const perfumery = await Perfumeries.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if (!perfumery) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: perfumery
        });
    } catch(err) {
        res.status(400).json({
            success: false
        });
    }
}

// Description: Delete perfumery
// Route: DELETE /api/v1/perfumeries/:id
exports.deletePerfumery = async (req, res, next) => {
    try{
        const perfumery = await Perfumeries.findByIdAndDelete(req.params.id);
    
        if (!perfumery) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch(err) {
        res.status(400).json({
            success: false
        });
    }
}