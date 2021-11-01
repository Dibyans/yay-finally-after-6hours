img = "";

function preload(){
    img = loadImage("bedroom.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#080202");
    text("B E D",200,130);
    noFill();
    stroke("#080202");
    rect(185,115,450,350);
}