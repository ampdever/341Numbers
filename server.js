const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express(); //create instance of express

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested_With, Content-Tpe, Accept, Z-Key'
    );
    res.setHeader('Access-Control_Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => (console.log(`Running on port ${port}`)));
    }
});