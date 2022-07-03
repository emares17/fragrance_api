const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

app.get('/api/v1/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show all '})
});

app.get('/api/v1//:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get ${req.params.id}`})
});

app.post('/api/v1/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Create new '})
});

app.put('/api/v1//:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update ${req.params.id}`})
});

app.delete('/api/v1//:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete ${req.params.id}`})
});

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

