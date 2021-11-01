img = "";

function preload(){
    img = loadImage("my bottels.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#080202");
    text("B O T T E L",405,35);
    noFill();
    stroke("#080202");
    rect(390,20,225,500);
}