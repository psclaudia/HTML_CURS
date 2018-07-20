var numserie = "0";
var num = 0;

$(document).ready(function() {
	$(".description").css("display","none");

 	$("#controls").on('click', 'span', function() {
 		$("video")[numserie].currentTime = 0;
	   	$(".series img").removeClass("opaque");
	    var newImage = $(this).index();
	    console.log(newImage);
	    $(".series img").eq(newImage).addClass("opaque");
	    $("#controls span").removeClass("selected");
	    $(this).addClass("selected");
	    var aux = $(this).attr("id");
	    numserie = aux.charAt(aux.length-1);
    }),
    /*funcion popup*/
    "use strict";
    $(".series").click(function () {
    	$("video")[numserie].currentTime = 0;
        $(".series").fadeOut();
        $("#controls").fadeOut();
        $(".show").fadeIn();
        console.log(numserie);
        $(".seriedescripcion"+numserie).show();
        console.log(numserie);
    }),
    
    $("span, .overlay").click(function () {
    	$("video")[numserie].pause();
        $(".show").fadeOut();
        $(".series").fadeIn();
        $("#controls").fadeIn();

    }),

    $("#controls span").click(function () {
    	var id = $(this).attr('id');
    	console.log(id);
    	numserie =id.charAt(id.length-1);
    	console.log(numserie);
    	$(".description").css("display","none");
    	$(".seriedescripcion" + numserie).css("display","block");
    });



  });
