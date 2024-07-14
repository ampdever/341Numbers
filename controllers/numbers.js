const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllNumbers = async (req, res) => {
    //#swagger.tags=['Numbers']
    const result = await mongodb.getDatabase().db().collection('numbers').find();
    result.toArray().then((numbers) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(numbers);
    });
};

const getSingleNumber = async (req, res) => {
    //#swagger.tags=['Numbers']
    const numberId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('numbers').find({ _id: numberId });
    result.toArray().then((numbers) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(numbers[0]);
    });
};

const createNumber = async (req, res) => {
    //#swagger.tags=['Numbers']
    const number = {
        name: req.body.name,
        one: req.body.one,
        two: req.body.two,
        three: req.body.three,
        four: req.body.four,
        five: req.body.five,
        six: req.body.six,
        seven: req.body.seven
    };
    const response = await mongodb.getDatabase().db().collection('numbers').insertOne(number);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while creating the number.');
    }
};

const updateNumber = async (req, res) => {
    //#swagger.tags=['Numbers']
    const numberId =  new ObjectId(req.params.id);
    const number = {
        name: req.body.name,
        one: req.body.one,
        two: req.body.two,
        three: req.body.three,
        four: req.body.four,
        five: req.body.five,
        six: req.body.six,
        seven: req.body.seven
    }
    const response = await mongodb.getDatabase().db().collection('numbers').replaceOne({ _id: numberId}, number);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while updating the number.');
    }
};

const deleteNumber = async (req, res) => {
    //#swagger.tags=['Numbers']
    const numberId =  new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('numbers').deleteOne({ _id: numberId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error ||  'Some error occurred while deleting the number.');
    }
};

module.exports = {
    getAllNumbers,
    getSingleNumber,
    createNumber,
    updateNumber,
    deleteNumber
}