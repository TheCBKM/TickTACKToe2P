var w,h,database
var joingame,creategame,gamecode; 
var gc;
function setup(){
    gc=int(random(99,1000));
	canvas=createCanvas(windowWidth,windowHeight)
    w=windowWidth/100;
    h=windowHeight/100;
    joingame=createButton("Join");
    creategame=createButton("Create")
    creategame.mousePressed(function(){
    	window.location.href='play.html?gamecode='+gc+'&chance=X';
    });
    joingame.mousePressed(function(){
    	window.location.href='play.html?gamecode='+gamecode.value()+'&chance=O';
    });
    gamecode=select("#gamecode");
}
function draw(){
	background(225,225,150);
    textSize(5*w+5*h);
    text('Tick-Tack-Toe',10*w,10*h);
    textSize(2*w+2*h);
    text('Enter game code here:',20*w,25*h); 
    gamecode.position(30*w,28*h);
	joingame.position(60*w,28*h);
    text('Or Create Room:',20*w,37*h); 
    createButton(gc).position(50*w,38*h) ;
	creategame.position(33*w,38*h) ;
}