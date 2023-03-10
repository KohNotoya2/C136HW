status="";

function setup() {
    canvas=createCanvas(480,340);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,480,340);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    document.getElementById("text_input").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status=true;
}