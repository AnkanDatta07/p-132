Status = "";
Bed = "";

function preload()
{
    Bed = loadImage("m.jpg");
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
    objectDetector.Detect(Bed, gotResult);
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
    image(Bed, 0, 0, 640, 350);
}