nosex=0;
nosey=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/Y907JzWF/ff7eec7342ac54825ab162d37fadc943-1.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,30,30);


}
function take_snapshot(){
    save('Coding_image.png')
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-14;
        nosey=results[0].pose.nose.y-14;
        console.log("nosex = "+results[0].pose.nose.x)
        console.log("nosey = "+results[0].pose.nose.y)
    }
}