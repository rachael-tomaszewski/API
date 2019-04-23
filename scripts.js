///write javascript to pull images from image folder and randomize them upon refresh///

<SCRIPT LANGUAGE="JavaScript">

<!-- Begin
// Set up the image files to be used.
var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array.

theImages[0] = '1.jpg'
theImages[1] = '2.jpg'
theImages[2] = '3.jpg'
theImages[3] = '4.jpg'
theImages[4] = '5.jpg'
theImages[5] = '6.jpg'
theImages[6] = '7.jpg'
theImages[7] = '8.jpg'


var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}

var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+theImages[whichImage]+'">')
)};


