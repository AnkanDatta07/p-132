Status = "";
Ac = "";

function preload()
{
    Ac = loadImage("o12.jpg");
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
    objectDetector.Detect(Ac, gotResult);
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
    image(Ac, 0, 0, 640, 350);
}