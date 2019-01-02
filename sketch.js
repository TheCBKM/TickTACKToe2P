var grid=[]
var bgrid=[];
var c=0;
var chance,play=false;
var w,h;
var database ,ref;
var gamecode
function setup() {
    params = getURLParams();
    gamecode=params.gamecode;
    chance=params.chance;
    if(chance=='X')
      play=true;
    canvas=createCanvas(windowWidth,windowHeight)
    w=windowWidth/100;
    h=windowHeight/100;
  var config = {
    apiKey: "AIzaSyBEoVHkUHSHyav2QPCbnkbM5zYjl2PDW5w",
    authDomain: "cbkm-63bc3.firebaseapp.com",
    databaseURL: "https://cbkm-63bc3.firebaseio.com",
    projectId: "cbkm-63bc3",
    storageBucket: "cbkm-63bc3.appspot.com",
    messagingSenderId: "948259250036"
    
  };
  firebase.initializeApp(config);
  //console.log(firebase);
 database=firebase.database();
  ref = database.ref('Game/'+gamecode);
    ref.on('value',gotData,errData);
}
function gotData(data){
	var gridc=data.val();
    keys=Object.keys(gridc);
      var k=keys[keys.length-1];
      var ngrid=gridc[k].grid;
      nchance=gridc[k].chance;
   	  if(nchance!=chance)
   	  	play=true;
   	  else 
   	  	play=false
      grid=ngrid;
      bgrid=grid;
      checkWin(bgrid,chance)

}
 function errData(err){
    console.log('Error!!!')
    console.log(err);
  }
function draw() {
    background(225,225,100);
    fill(0)
    line(33*w,0,33*w,100*h);
    line(66*w,0,66*w,100*h);
    line(0,33*h,100*w,33*h);
    line(0,66*h,100*w,66*h);
    textSize(10*w+10*h)
    for(i=0;i<9;i++){
    	if(grid[i]!=null){
    	if(i>=0&&i<=2)
    		text(grid[i],(i*33+5)*w,25*h);
    	if(i>=3&&i<=5)
    		text(grid[i],((i-3)*33+5)*w,(33+25)*h);
    	if(i>=6&&i<=8)
    		text(grid[i],((i-6)*33+5)*w,(66+25)*h);
    	}	

    }
}
function setPoint(i){
p=chance;
if(bgrid[i]==null){
	bgrid[i]=p;
	c++;
  var data = {
  grid: bgrid,
  chance:chance
};
//console.log(data);
ref.push(data);
}

}
function mousePressed(){
	if(play)
	if(mouseX>33*w)
		if(mouseX>66*w)
			if(mouseY>33*h)
				if(mouseY>66*h)
					setPoint(8);
				else
					setPoint(5);
			else
				setPoint(2)
		else
			if(mouseY>33*h)
				if(mouseY>66*h)
					setPoint(7);
				else
					setPoint(4);
			else
				setPoint(1);	
	else
		if(mouseY>33*h)
				if(mouseY>66*h)
					setPoint(6);
				else
					setPoint(3);
			else
				setPoint(0);
}
function checkWin(xgrid,p){
  if(xgrid[0]==p&&xgrid[1]==p&&xgrid[2]==p)
    print(p+" wins");
  else if(xgrid[3]==p&&xgrid[4]==p&&xgrid[5]==p)
    print(p+" wins");
  else if(xgrid[6]==p&&xgrid[7]==p&&xgrid[8]==p)
    print(p+" wins");
  else if(xgrid[0]==p&&xgrid[3]==p&&xgrid[6]==p)
    print(p+" wins");
  else if(xgrid[1]==p&&xgrid[4]==p&&xgrid[7]==p)
    print(p+" wins");
  else if(xgrid[2]==p&&xgrid[5]==p&&xgrid[8]==p)
    print(p+" wins");
  else if(xgrid[0]==p&&xgrid[4]==p&&xgrid[8]==p)
    print(p+" wins");
  else if(xgrid[6]==p&&xgrid[4]==p&&xgrid[2]==p)
    print(p+" wins");
}