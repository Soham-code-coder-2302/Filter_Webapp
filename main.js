var nose_x=0;
var nose_y=0;

function preload(){
moustache=loadImage('https://i.postimg.cc/g2FR13wh/moustache.png');
}

function setup(){
canvas=createCanvas(500,300);
canvas.center();
video=createCapture(VIDEO);
video.size(500,300);
video.hide();
posenet=ml5.poseNet(video,modelloaded);//initializing posenet model.
posenet.on('pose',gotPoses)
}

function gotPoses(result){
if(result.length>0){
console.log(result);
nose_x=result[0].pose.nose.x;
nose_y=result[0].pose.nose.y;
console.log("nose_x="+nose_x+"nose_y="+nose_y);
}
}

function modelloaded(){
console.log("model has been loaded.");
}

function draw(){
image(video,0,0,500,300);
fill("cyan")
stroke("black")
image(moustache,nose_x-30,nose_y,60,35)
}


function take_snapshot(){
save('my_moustache_image.jpeg')
}