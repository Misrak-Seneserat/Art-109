var socket;

function setup() {
creatCanvas(600, 400);
background(51);

socket = io.connect('http://localhost:3000')
socket.on('mosue', newDrw);
}

function newDrawing(data){
    noStroke();
    fill(255, 0, 100);
     ellipse(data.X, data.mosueY, 36, 36);
}

function mouseDragged(){
    console.log('sending: ' + mosueX + ',' + mosueY);
    var data = {
        x: mosueX,
        y: mosueY
    }
    socket.emit('mosue', data);

     background(255);
   
}

function draw() {

}