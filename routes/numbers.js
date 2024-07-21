const express = require('express');
const router = express.Router();

const numbersController = require('../controllers/numbers');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', numbersController.getAllNumbers);
router.get('/:id', numbersController.getSingleNumber);

router.post('/', isAuthenticated, numbersController.createNumber); //create
router.put('/:id', isAuthenticated, numbersController.updateNumber); //update
router.delete('/:id', isAuthenticated, numbersController.deleteNumber); //delete

module.exports = router;