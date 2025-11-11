var socket;

function setup() {
creatCanvas(200, 200);
background(51);

socket = io.connect('http://localhost:3000')
}

function draw() {
 background(51);
 ellipse(mosueX, mosueY, 60, 60);
}