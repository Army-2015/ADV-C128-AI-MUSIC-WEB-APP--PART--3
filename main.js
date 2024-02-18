var piano_music = "";
var guitar_music = "";
var leftWristX = 0;
var rightWristX = 0;
var leftWristY = 0;
var rightWristY = 0;

function preload(){
    piano_music = loadSound("piano_music.mp3");
    guitar_music = loadSound("guitar_music.mp3");
}

function setup(){
    canvas = createCanvas(450, 450);
    canvas.position(530, 455);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Model is Loaded !");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X position = " + leftWristX + ", Left Wrist Y position = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X position = " + rightWristX + ", Right Wrist Y position = " + rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 450, 450);
}