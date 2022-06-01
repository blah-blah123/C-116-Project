noseX = 0;
noseY = 0;

function preload() {
    snowflake = loadImage("https://i.postimg.cc/6QBpxWcL/snowflakes-background-png-892x1024.png");
    lip = loadImage("https://i.postimg.cc/BZyqmcK0/hehe.png");
}

function draw() {
image(video , 0,0,300,300);
//fill(0,0,255);
//stroke(255,0,255);
//circle(noseX, noseY, 20);

image(snowflake , noseX-15,noseY-15,30,30);
image(lip , noseX-20 , noseY+20 , 35,35);
}

function setup() {

    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("Model is Loaded!");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log("nose_x =" + results[0].pose.nose.x);
    console.log("nose_y =" + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
}
}


 

function savemyImage() {
    save("myFilterImage.png");
}