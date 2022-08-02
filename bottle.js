Status = "";
bottle = "";

function preload()
{
    bottle = loadImage("images.jpg");
}

function setup()
{
    canvas = createCanvas(640, 350);
    canvas.position(400, 200);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    objectDetector.Detect(bottle, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}

function draw()
{
    image(bottle, 0, 0, 640, 350);
}