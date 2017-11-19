const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer  = require('multer');
const upload = multer();
var fs = require('fs')

const port = 8888;

app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const image = [];

app.get('/', (req, res) => {
    res.json({ image });
});

app.post('/imagemal/SaveImage', upload.array(), (req, res) => {
    if (req.body && req.body.url) {
    //not sure how to display inital image
        return res.status(200).send();
    }

    res.status(400).send();
})


/*
app.get('/api/imagemal', (req, res) => {

    res.status(200).send(('id: ' + req.query.id));
});
*/

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
