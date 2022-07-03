const express = require('express');
const router = express.Router();

router.get('/api/v1/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all '})
});

router.get('/api/v1//:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get ${req.params.id}`})
});

router.post('/api/v1/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new '})
});

router.put('/api/v1//:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update ${req.params.id}`})
});

router.delete('/api/v1//:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete ${req.params.id}`})
});