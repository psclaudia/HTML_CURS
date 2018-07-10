  var spos = [{x:0,y:0}];
var apos = {x:0,y:0};
var size = 20; //same size for apple and snakes's head
var WIDTH = 500;
var HEIGHT = 500;
var ctx;
var interval;
var parts = 1;
var dir = {u:0,d:0,l:0,r:1};
var i;
var newx;
var newy;
var eaten = false;
var xx;
var yy;

window.onload = function() {
	initialize();
	window.onkeydown = function() {
		key(event);
	}
}

function initialize() {
	ctx = document.getElementById('container').getContext("2d");
	updateFruit();
	updateSnake();
	interval = setInterval(update,150);
}

function updateFruit() {
	apos.x = (Math.floor(Math.random()*((WIDTH-size)/size) + 1))*size;
	apos.y = (Math.floor(Math.random()*((HEIGHT-size)/size) + 1))*size;
	draw(apos.x,apos.y,size,"red");
	updateSnake();
}

function updateSnake() {
	if(eaten == true){
		eaten = false;
		for(i = parts-2; i > 0; i--) {
			newx = spos[i-1].x;
			newy = spos[i-1].y;
			draw(newx,newy,size,"black");
			spos[i].x = newx;
			spos[i].y = newy;
		}
		spos.push({x:xx, y:yy});		
	}
	else{
		for(i = parts-1; i > 0; i--) {
			newx = spos[i-1].x;
			newy = spos[i-1].y;
			draw(newx,newy,size,"black");
			spos[i].x = newx;
			spos[i].y = newy;			
		}
	}
	newx = spos[0].x;
	newy = spos[0].y;
	if(dir.u == 1) newy = spos[0].y - size;
	else if(dir.d == 1) newy = spos[0].y + size;
	else if(dir.l == 1) newx = spos[0].x - size;
	else if(dir.r == 1) newx = spos[0].x + size;
	spos[0].x = newx;
	spos[0].y = newy;
	draw(newx,newy,size,"black");
	
}

function draw(x,y,size,color) {
	ctx.beginPath();
	ctx.rect(x, y, size, size);
	ctx.fillStyle = color;
	ctx.fill();
}

function key(event){
	var x =event.keyCode;
	if(x == 37) { //left
		dir = {u:0,d:0,l:1,r:0};
	}
	else if(x == 38) { //up
		dir = {u:1,d:0,l:0,r:0};
	}
	else if(x == 39) { //right
		dir = {u:0,d:0,l:0,r:1};
	}
	else if(x == 40) { //down
		dir = {u:0,d:1,l:0,r:0};
	}
}

function update() {
	ctx.clearRect(0,0,WIDTH,HEIGHT);
	if(spos[0].x == apos.x && spos[0].y == apos.y) {
		++parts;
		eaten = true;
		xx = spos[parts-2].x;
		yy = spos[parts-2].y;
		updateFruit();	
	}
	else if(spos[0].x > WIDTH || spos[0].x < 0 || spos[0].y > HEIGHT || spos[0].y < 0 || crashes()){
		clearInterval(interval);		
		document.getElementById("play").disabled = false;
		alert("GAME OVER");
	}
	else {
		draw(apos.x,apos.y,size,"red");
		updateSnake();
	}
}

function crashes(){
	var posx = spos[0].x;
	var posy = spos[0].y;
	for(i = 1; i< spos.length; ++i){
		if(posx == spos[i].x && posy == spos[i].y) return true;
	}
	return false;
}


