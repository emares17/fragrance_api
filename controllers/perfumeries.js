const Perfumeries = require('../models/Perfumeries');

// Description: Get all perfumeries
// Route: GET /api/v1/perfumeries
exports.getPerfumeries = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all perfumeries'});
}

// Description: Get single perfumeries
// Route: GET /api/v1/perfumeries/:id
exports.getPerfumery = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get perfumery ${req.params.id}`});
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
exports.updatePerfumery = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update perfumery ${req.params.id}`});
}

// Description: Delete perfumery
// Route: DELETE /api/v1/perfumeries/:id
exports.deletePerfumery = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete perfumery ${req.params.id}`});
}