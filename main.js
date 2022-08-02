/*.play_button{
    width: 600px;
    font-size: 25px;
}

canvas{
    border: 5px solid aqua;
    border-radius: 50px;
}

function setup(){
    canvas = createCanvas(600,500)
}

<button onclick="play();" class="btn btn-success play_button">ppppppPpppppPlLllLlLlLAaaAaaAaaAYyyYyyYyYyy</button>*/

song = "";
roblox = 0;
roboy = 0;
lox = 0;
lure = 0;


function preload() {
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide();

    posenet = ml5.poseNet(video,minecraft)
    posenet.on('pose',LOLAOALOALAO)
}

function minecraft(){
    console.log("YOU PLAYING MINECRAFT,I LIKE YA CUT G >:)))")
}

function LOLAOALOALAO(results){
    if (results.length > 0){
        console.log(results)

        roblox = results[0].pose.rightWrist.x
        roboy = results[0].pose.rightWrist.y
        lox = results[0].pose.leftWrist.x
        lure = results[0].pose.leftWrist.y
        console.log(roblox,roboy,lox,lure + " these are right x and y and left x and y")
    }
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function play(){
    song.play();
    song.volume(0.9);
    song.rate(2);
}