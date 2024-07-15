const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World. This is my project with Numbers.')
});

router.use('/contacts', require('./contacts'));
//router.use('/users', require('./users'));
router.use('/numbers', require('./numbers'));

module.exports = router;