$(document).ready(function() {
	$(".wrapper").hide();
	$(".wrapper").fadeIn(1500, function() {
		        // Animation complete
		      });
	$("#textWrapper").hide();
	$("header h1").click(function() {
		$("#textWrapper").hide();
		showAll();
		removeSelected();
	});
	/*hover menu*/
	$("#one_piece, #experience").hover(
	  function () {
	    $("#experience").addClass("selectedMenu");
		$("#one_piece").addClass("selectedImg");
	  },
	  function () {
	    $("#experience").removeClass("selectedMenu");
		$("#one_piece").removeClass("selectedImg");
	  }
	);
	$("#two_piece, #portfolio").hover(
	  function () {
	    $("#portfolio").addClass("selectedMenu");
		$("#two_piece").addClass("selectedImg");
	  },
	  function () {
	    $("#portfolio").removeClass("selectedMenu");
		$("#two_piece").removeClass("selectedImg");
	  }
	);
	$("#three_piece, #knowledge").hover(
	  function () {
	    $("#knowledge").addClass("selectedMenu");
		$("#three_piece").addClass("selectedImg");
	  },
	  function () {
	    $("#knowledge").removeClass("selectedMenu");
		$("#three_piece").removeClass("selectedImg");
	  }
	);
	$("#four_piece, #about").hover(
	  function () {
	    $("#about").addClass("selectedMenu");
		$("#four_piece").addClass("selectedImg");
	  },
	  function () {
	    $("#about").removeClass("selectedMenu");
		$("#four_piece").removeClass("selectedImg");
	  }
	);
	/*turn the wheel around*/
	$("#one_piece, #experience").click(function() {
		removeSelected();
		removeHeaderClass();
		$("#experience").addClass("selected");
		$("header").addClass("onePieceSelected");
		$("#textWrapper").fadeIn(1000);
		$("#changableTextBlock").load("content.html #text1", function() {
			$("#text1").hide();
			$("#text1").fadeIn(1000);	
		});
		var r=45;
		rotate(r);
	});	
	$("#two_piece, #portfolio").click(function() {
		removeSelected();
		removeHeaderClass();
		$("#portfolio").addClass("selected");
		$("header").addClass("twoPieceSelected");
		$("#textWrapper").fadeIn(1000);
		$("#changableTextBlock").load("content.html #text2", function() {
			$("#text2").hide();
			$("#text2").fadeIn(1000);	
		});
		var r=-45;
		rotate(r);
	});
	$("#three_piece, #knowledge").click(function() {
		removeSelected();
		removeHeaderClass();
		$("#knowledge").addClass("selected");
		$("header").addClass("threePieceSelected");
		$("#textWrapper").fadeIn(1000);
		$("#changableTextBlock").load("content.html #text3", function() {
			$("#text3").hide();
			$("#text3").fadeIn(1000);	
		});
		var r=135;
		rotate(r);
	});
	$("#four_piece, #about").click(function() {
		removeSelected();
		removeHeaderClass();
		$("#about").addClass("selected");
		$("header").addClass("fourPieceSelected");
		$("#textWrapper").fadeIn(1000);
		$("#changableTextBlock").load("content.html #text4", function() {
			$("#text4").hide();
			$("#text4").fadeIn(1000);	
		});
		var r=-135;
		rotate(r);
	});
	//Functions
	function removeSelected() {
		$("#experience").removeClass("selected");
		$("#portfolio").removeClass("selected");
		$("#knowledge").removeClass("selected");
		$("#about").removeClass("selected");
	}
	function removeHeaderClass() {
		$("header").removeClass("onePieceSelected");
		$("header").removeClass("twoPieceSelected");
		$("header").removeClass("threePieceSelected");
		$("header").removeClass("fourPieceSelected");
	}
	function rotate(r) {
		$(".rotatingChart").css("transform","rotate("+r+"deg)");
		$(".rotatingChart").css("-moz-transform","rotate("+r+"deg)");
		$(".rotatingChart").css("-webkit-transform","rotate("+r+"deg)");
		$(".rotatingChart").css("-o-transform","rotate("+r+"deg)");
		$(".rotatingChart").css("-ms-transform","rotate("+r+"deg)");
	}
	function hideOthers() {
		$("#one_piece").css('opacity', '0.1');
		$("#two_piece").css('opacity', '0.1');
		$("#three_piece").css('opacity', '0.1');
		$("#four_piece").css('opacity', '0.1');
	}
	function showAll() {
		$("#one_piece").css('opacity', '1');
		$("#two_piece").css('opacity', '1');
		$("#three_piece").css('opacity', '1');
		$("#four_piece").css('opacity', '1');
	}
});