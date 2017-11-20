const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const multer  = require('multer');
const upload = multer();
var gm = require('gm');
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
        request(req.body.url).pipe(fs.createWriteStream('orginal.png'))
       
        return res.status(200).send();
    }

    res.status(400).send();
});

app.post('/imagemal/crop', upload.array(), (req, res) => {
    gm('orginal.png')
    .size(function (err, size) {
      if (!err)
        console.log(size.width > size.height ? 'wider' : 'taller than you');
        var ow=size.width;
        var oh=size.height;
        console.log(ow,oh)
        var w = ow/2;
        var h = oh/2;
        var x=w;
        var y=h;
        gm("orginal.png").crop(w,h,x,y)
        .write('crop.png', function (err) {
            if (!err) console.log('done');
          })
    });
});

app.post('/imagemal/resize', upload.array(), (req, res) => {
    gm('orginal.png')
    .size(function (err, size) {
      if (!err)
        console.log(size.width > size.height ? 'wider' : 'taller than you');
        var ow=size.width;
        var oh=size.height;
        console.log(ow,oh)
        var w = ow/2;
        var h = oh/2;
        gm("orginal.png")
        .resizeExact(w, h)
        .write('resize.png', function (err) {
          if (!err) console.log('done');
        });
    });
   
});

app.post('/imagemal/rotate', upload.array(), (req, res) => {
    gm("orginal.png")
    .rotate(blue, 90)
    .write('rotate.png', function (err) {
        if (!err) console.log('done');
      });

});
    
    

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
