const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer  = require('multer');
const upload = multer();
var fs = require('fs')
var request = require('request');

const port = 8888;

app.use('/', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const image = [];

app.get('/imagemal/SaveImage', (req, res) => {
    res.json({ image });
});

app.post('/imagemal/SaveImage', upload.array(), (req, res) => {
    if (req.body && req.body.url) {
        console.log(req.body.url)
        request(req.body.url).pipe(fs.createWriteStream('pic.png'))
        
        return res.status(200).send();
    }

    res.status(400).send();
});

app.post('/imagemal/crop', upload.array(), (req, res) => {
    var w;
    var h;
    var x;
    var y;
    gm("orginal.png").crop(w,h,x,y)
});

app.post('/imagemal/resize', upload.array(), (req, res) => {
    var w;
    var h;
    var x;
    var y;
    gm("orginal.png").crop(w,h,x,y)
});

app.post('/imagemal/rotate', upload.array(), (req, res) => {
    var w;
    var h;
    var x;
    var y;
    gm("orginal.png").crop(w,h,x,y)
});
    
    

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
