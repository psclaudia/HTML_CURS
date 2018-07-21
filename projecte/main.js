var numserie = "0";
var num = 0;

$(document).ready(function() {
	$(".description").css("display","none");

	/*$("#logo").on('click', 'span', function() {
		numserie = Math.floor(Math.random()*10);
		console.log(numserie);
        $(".series").click();
        console.log(numserie); la random es esta yo cambiaría la forma de hacer el random
    });*/

    $("#logo").on('click', 'span', function() {
		num = Math.floor(Math.random()*10);
		numserie = num.toString();
		console.log(numserie);
        $("#serietext" + numserie).click(); //no va...
        setTimeout(function(){ $(".series").click(); }, 2000);
        console.log(numserie);
    });

 	$("#controls").on('click', 'span', function() {
 		$("video")[numserie].currentTime = 0;
	   	$(".series img").removeClass("opaque");
	    var newImage = $(this).index();
	    $(".series img").eq(newImage).addClass("opaque");
	    $("#controls span").removeClass("selected");
	    $(this).addClass("selected");
	    var aux = $(this).attr("id");
	    numserie = aux.charAt(aux.length-1);
    }),
    /*funcion popup*/
    "use strict";
    $(".series").click(function () {
    	console.log(numserie);
    	$("video")[numserie].currentTime = 0;
        $(".series").fadeOut();
        $("#controls").fadeOut();
        $(".show").fadeIn();
        $(".seriedescripcion"+numserie).show();
    }),
    
    $("span, .overlay").click(function () {
    	$("video")[numserie].pause();
        $(".show").fadeOut();
        $(".series").fadeIn();
        $("#controls").fadeIn();

    }),

    $("#controls span").click(function () {
    	var id = $(this).attr('id');
    	numserie =id.charAt(id.length-1);
    	$(".description").css("display","none");
    	$(".seriedescripcion" + numserie).css("display","block");
    });



  });
