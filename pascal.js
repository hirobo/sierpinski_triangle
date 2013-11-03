// Draw a Sierpinski Triangle use Pascal's Triangle
function drawSierpinskiTriangle(){
    var degree = 9;    
    var size = Math.pow(2, degree);
    var canvas = document.getElementById("canvas");
    canvas.width = size;
    canvas.height = size;
    var context = canvas.getContext("2d");    
    var imgData = context.createImageData(size, size);
    var image = document.getElementById("image");
    var color = [0,0,255];  // r, g, b
    var opacity = 128;
    
    // calculate pascal's triangle mod 2
    var data = new Array(size);
    for(var j = 0; j < size; j++){
        data[j] = new Array(j + 1);
        for(var i = 0; i < data[j].length; i++){
            if(!i|| i === data[j].length - 1){
                data[j][i] = 1;
            }else{
                data[j][i] = (data[j-1][i-1] + data[j-1][i])%2;
            }
        }                                                    
    }
    // draw the triangle
    for(var j = 0; j < data.length; j++){
        for(var i = 0; i < data[j].length; i++){
            if(data[j][i]){
                setPixel(imgData, i + Math.round((size - j)/2), j, color, opacity);
            }
        }                                                    
    }
    // put the image data
    context.putImageData(imgData,0,0);
    image.setAttribute('src', canvas.toDataURL('image/png'));
};
function setPixel(imgData, x, y, color, opacity) {
    var i = (x + y * imgData.width) * 4;
    imgData.data[i + 0] = color[0];
    imgData.data[i + 1] = color[1];
    imgData.data[i + 2] = color[2];
    imgData.data[i + 3] = opacity;
};