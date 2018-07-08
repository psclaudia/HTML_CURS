var id;
var pos;
var object;



window.onload = function(){
	id = setInterval(move,300);
	pos = 0;
	object = document.getElementById('imagen');
}

function move() {
  var x = Math.floor(Math.random()*500);
  var y = Math.floor(Math.random()*1300);
  object.style.top = x + 'px';
  object.style.left = y + 'px';
}