function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
        video.hide()
}

function draw()
{
    Image(video,0,0,600,500);
}
 song = "";

 function preload()
 {
     song = loadSound("music")
 }
















































