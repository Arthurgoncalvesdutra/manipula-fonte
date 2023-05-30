var diferenca=0
var pulso_direitoX=0
var pulso_esquerdoX=0
var pulso_esquerdoY=0
var pulso_direitoY=0

function setup(){
    video=createCapture(VIDEO)
    video.size(550, 500)
    canvas=createCanvas(550, 550)
    canvas.position(560, 150)
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("PosenetIniciou")
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results)
        pulso_esquerdoX=results[0].pose.leftWrist.x
       pulso_direitoX=results[0].pose.rightWrist.x
       diferenca=floor(pulso_esquerdoX-pulso_direitoX)
    }
}
function draw(){
    background("#6C91C2")
    document.getElementById("tamanhoFonte").innerHTML="tamanho da fonte sera"+diferenca+"px"
    textSize(diferenca)
    fill("#FFE787")
    text("nome", 50, 400)
}