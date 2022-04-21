upperlipx=0;
upperlipy=0;
function preload(){
img=loadImage("https://i.postimg.cc/mDnX6wTC/mustache.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
fill(0,0,0);
stroke(2,0,2);
circle(upperlipx,upperlipy,20);
image(img,upperlipx,upperlipy,30,30);
}
function capture(){
    save('my_img.png');
}
function modelLoaded(){
    console.log("PoseNet is initialised.");
}
function gotPoses(results){
if (results.length>0) {
    console.log(results);
    upperlipx=results[0].pose.nose.x-10;
    upperlipy=results[0].pose.nose.y-10
}
}