function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status".innerHTML = "Status ; Detecting Objects");
}

img = "";
status = "";
objects= [];

function preload (){
img = loadImage('lion and tiger.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != "")
     {
       for ( i = 0; 1< objects.lenght; i++)
       {
           document.getElementById("status").innerHTL ="Status ; Objects Detected";

           fill("#FF0000");
           percent = floor(object[i].confidence* 100);
           text(object[i].label + ""+percent + "%", objects[i].x + 15, objects[i].y + 15);
           noFill();
           stroke("#FF000")
           rect(objects[i].x, objects[i].y ,objects[i].width, objects[i].height);
       }
     }
    fill("#FF0000");
    text("lion", 45, 75);
    noFill();
    stroke("#FF000")
    rect(30, 60, 450, 350);

    fill("FF0000")
    text("tiger", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);
}

function modelLoaded(){
    console.log("Model Loaded!")
    staus = true;
    objectDetector.detect(img, gotResult);
}