var w,h,database
var joingame,creategame,gamecode; 
function setup(){
	canvas=createCanvas(windowWidth,windowHeight)
    w=windowWidth/100;
    h=windowHeight/100;
    joingame=createButton("Join");
    creategame=createButton("Create")
    creategame.mousePressed(function(){
    	window.location.href='play.html?gamecode='+int(random(99,1000))+'&chance=X';
    });
    joingame.mousePressed(function(){
    	window.location.href='play.html?gamecode='+gamecode.value()+'&chance=O';
    });
    gamecode=select("#gamecode");
}
function draw(){
	background(225,225,150);
		gamecode.position(30*w,30*h);
		joingame.position(30*w,40*h);
		creategame.position(50*w,40*h);
}