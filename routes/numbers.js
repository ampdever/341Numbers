const express = require('express');
const router = express.Router();

const numbersController = require('../controllers/numbers');

router.get('/', numbersController.getAll);
router.get('/:id', numbersController.getSingle);

router.post('/', numbersController.createContact); //create
router.put('/:id', numbersController.updateContact); //update
router.delete('/:id', numbersController.deleteContact); //delete

module.exports = router;