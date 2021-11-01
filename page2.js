img = "";

function preload(){
    img = loadImage("desk.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#080202");
    text("D E S K",30 ,75);
    noFill();
    stroke("#080202");
    rect(15,60,600,350);
}