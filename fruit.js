Status = "";
fruit = "";

function preload()
{
    fruit = loadImage("delicious-fruit-basket.jpg");
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
    objectDetector.Detect(fruit, gotResult);
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
    image(fruit, 0, 0, 640, 350);
}