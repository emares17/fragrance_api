const express = require('express');
const { 
    getPerfumeries, 
    getPerfumery, 
    createPerfumery, 
    updatePerfumery, 
    deletePerfumery
  } = require('../controllers/perfumeries');

const router = express.Router();

router.route('/')
    .get(getPerfumeries)
    .post(createPerfumery);

router.route('/:id')
    .get(getPerfumery)
    .put(updatePerfumery)
    .delete(deletePerfumery);

module.exports = router;