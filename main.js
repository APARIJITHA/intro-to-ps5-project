function preload() {
}

function setup(){
canvas = createCanvas(500,480);
canvas.position(630,300);
video = createCapture(VIDEO);
video.hide();

}

function draw(){
    fill(105, 4, 199);
    stroke(255,255,255);
    circle(30, 30, 400);
    
    circle(30, 450,400);
    
    circle(510, 450,400);
    
    circle(500, 30,400);
    

    image(video,160,150,200,200)
    tint("violet");
}


