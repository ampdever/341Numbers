const express = require('express');
const router = express.Router();

const numbersController = require('../controllers/numbers');

router.get('/', numbersController.getAllNumbers);
router.get('/:id', numbersController.getSingleNumber);

router.post('/', numbersController.createNumber); //create
router.put('/:id', numbersController.updateNumber); //update
router.delete('/:id', numbersController.deleteNumber); //delete

module.exports = router;