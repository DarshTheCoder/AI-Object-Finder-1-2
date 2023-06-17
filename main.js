function setup()
{
    canvas=createCanvas(420,320);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,420,320);
}
function start()
{
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
}
function modelLoaded()
{
    console.log("Model Loaded");
    status="true"
}