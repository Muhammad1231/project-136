status=""

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecing Objects";
    input = document.getElementById("input_id");
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw(){
    image(video,0,0,480,380);
}

function modelLoaded(){
    console.log("ModelLoaded!");
    status = true;
}