var spos = {x:0,y:0};
var apos = {x:0,y:0};
var size = 20; //same size for apple and snakes's head
var WIDTH = 500;
var HEIGHT = 500;
var ctx;
var interval;
var parts = 1;
var dir = {n:0,e:0,s:0,w:0};


function initialize() {
	ctx = document.getElementById('container').getContext("2d");
	updateFruit();
	updateSnake();
}

function updateFruit() {
	apos.x = (Math.floor(Math.random()*((WIDTH-size)/size) + 1))*size;
	apos.y = (Math.floor(Math.random()*((HEIGHT-size)/size) + 1))*size;
	draw(apos.x,apos.y,size,"red");
	updateSnake();
}

function updateSnake() {
	draw(spos.x,spos.y,size,"black");
}

function draw(x,y,size,color) {
	ctx.beginPath();
	ctx.rect(x, y, size, size);
	ctx.fillStyle = color;
	ctx.fill();
}

window.onload = function() {
	initialize();
}

