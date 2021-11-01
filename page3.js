img = "";

function preload(){
    img = loadImage("fruit basket.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#080202");
    text("F R U I T     B A S K E T",95,75);
    noFill();
    stroke("#080202")
    rect(80,60,500,350);
}