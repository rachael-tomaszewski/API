
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
theImages[8] = '9.jpg'
theImages[9] = '10.jpg'
theImages[10] = '11.jpg'
theImages[11] = '12.jpg'
theImages[12] = '13.jpg'
theImages[13] = '14.jpg'
theImages[14] = '15.jpg'
theImages[15] = '16.jpg'
theImages[16] = '17.jpg'
theImages[17] = '18.jpg'
theImages[18] = '19.jpg'
theImages[19] = '20.jpg'
theImages[20] = '21.jpg'
theImages[21] = '22.jpg'
theImages[22] = '23.jpg'
theImages[23] = '20.jpg'
theImages[24] = '25.jpg'
theImages[25] = '26.jpg'
theImages[26] = '27.jpg'
theImages[28] = '29.jpg'
theImages[29] = '30.jpg'
theImages[30] = '31.jpg'
theImages[31] = '32.jpg'
theImages[32] = '33.jpg'
theImages[33] = '34.jpg'
theImages[34] = '35.jpg'
theImages[35] = '36.jpg'
theImages[36] = '37.jpg'
theImages[37] = '38.jpg'
theImages[38] = '39.jpg'
theImages[39] = '40.jpg'
theImages[40] = '41.jpg'
theImages[41] = '42.jpg'
theImages[42] = '43.jpg'
theImages[43] = '44.jpg'
theImages[44] = '45.jpg'
theImages[45] = '46.jpg'
theImages[46] = '47.jpg'
theImages[47] = '48.jpg'
theImages[48] = '49.jpg'
theImages[49] = '50.jpg'


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

showImage();
 

