img = "";

function preload(){
    img = loadImage("tv room.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#080202");
    text("TV",175,45);
    noFill();
    stroke("#080202");
    rect(150,30,380,250);
}