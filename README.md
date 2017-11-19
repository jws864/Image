onst express = require('express');
const multer  = require('multer');
const upload = multer();

const port = 8888;

const app = express();

const bookmarks = [];

app.use('/', express.static('public'));

app.get('/api/bookmarks', (req, res) => {
    res.json({ bookmarks });
})


app.get(/:image)

