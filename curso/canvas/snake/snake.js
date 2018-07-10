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
	if(eaten) {
		eaten = false;
		spos.push({x:spos[parts-2].x,y:spos[parts-2].y});
	}
	for(i = 0; i < parts; i++) {
		newx = spos[i].x;
		newy = spos[i].y;
		if(dir.u == 1) newy = spos[i].y - size;
		else if(dir.d == 1) newy = spos[i].y + size;
		else if(dir.l == 1) newx = spos[i].x - size;
		else if(dir.r == 1) newx = spos[i].x + size;
		draw(newx,newy,size,"black");
		spos[i].x = newx;
		spos[i].y = newy;
	}
	
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
		updateFruit();
		++parts;
		eaten = true;
	}
	else {
		draw(apos.x,apos.y,size,"red");
		updateSnake();
	}
}


