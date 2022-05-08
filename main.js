video="";
status="";
function preload()
{
    video=createVideo('video.mp4');
    video.hide();
}

function setup()
{
    canvas=createCanvas(420,350);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    video.size(420,350);
}

function draw()
{
 image(video,0,0,400,350);
}

function start()
{
    objectsDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status = Objects Detecting";
}

function modelLoaded()
{
    console.log("model is loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
} 
