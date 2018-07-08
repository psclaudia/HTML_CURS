var object;



window.onload = function(){
	setInterval(move,300);
	object = document.getElementById('imagen');
}

function move() {
  var x = Math.floor(Math.random()*500);
  var y = Math.floor(Math.random()*1300);
  object.style.top = x + 'px';
  object.style.left = y + 'px';
}