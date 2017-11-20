//Not nesscarry  
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    var addImageForm = document.getElementById('add-image');
    addPictureURL.addEventListener("submit", function (event) {
        event.preventDefault();
    
        addImage(addImageForm)
            .then(getURL)
            .then(function(Urldata) {
                SaveImage(Urldata);
                console.log('Image Added');

            }
            .catch(function(e) {
                throw e;
            });
        })
});

function getURL() {
    return fetch('/api/imagemals')
        .then(function(response) {
            if (response.status !== 200) {
                return Promise.reject(new Error(response.statusText));
            }

            return response.json();
        })
        .then(function(json) {
            return json.Urldata;
        });
}
/*
function SaveImage(){
    //this recives the url and saves it as test.png
    request({
        url : Urldata,
        //make the returned body a Buffer
        encoding : null
    }, function(error, response, body) {
    
        //will be true, body is Buffer( http://nodejs.org/api/buffer.html )
        console.log(body instanceof Buffer);
    
        //do what you want with body
        //like writing the buffer to a file
        fs.writeFile('orginal.png', body, {
            encoding : null
        }, function(err) {
    
            if (err)
                throw err;
            console.log('It\'s saved!');
        });
    
    });
}
*/
function Crop(){
    var s =document.createElement('div');
    var submitButton = document.createElement('input');
    submitButton.setAttribute('value', 'Process');
    submitButton.setAttribute('type', 'submit');
    s.appendChild(submitButton);
    var w  = document.createElement('input');
    w.innerHTML = 'enter weight in pixels';
    var h  = document.createElement('input');
    h.innerHTML = 'enter height in pixels';
    var x  = document.createElement('input');
    x.innerHTML = 'enter x position in pixels';
    var y  = document.createElement('input');
    y.innerHTML = 'enter y position in pixels';

    s.appendChild(w);
    s.appendChild(h);
    s.appendChild(x);
    s.appendChild(y);
}