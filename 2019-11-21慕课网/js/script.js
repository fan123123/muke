$(function() {
	$(".nav ul li").hover(
		function() {
			$(this).children('').next().stop(true, true).delay(300).slideDown(400);
		},
		function() {
			$(this).children('').next().stop(true, true).delay(300).slideUp(400);
		}
	);
	$(".a_js").click(
		function() {
			$(".xianshi").css('display','none');
			$(".quxiao").css('display','block');
			$(".a_txt").stop(true, false).delay(0).animate({
				width: "100%",
				height: "100%"
			}, 0);
			$(".a_txt").find(".div1").stop(true, false).delay(0).animate({
				opacity: "0.9"
			}, 500);
			$(".a_txt").find(".div2").stop(true, false).delay(0).animate({
				opacity: "1"
			}, 500);
			$(".a_txt").find(".div3").stop(true, false).delay(0).animate({
				right: "0"
			}, 500);
		}
		
	)
	$(".a_closed").click(
		function() {
			$(".xianshi").css('display','block');
			$(".quxiao").css('display','none');
			$(".a_txt").stop(true, false).delay(500).animate({
				width: "0",
				height: "0"
			}, 0);
			$(".a_txt").find(".div1").stop(true, false).delay(0).animate({
				opacity: "0"
			}, 500);
			$(".a_txt").find(".div2").stop(true, false).delay(0).animate({
				opacity: "0"
			}, 500);
			$(".a_txt").find(".div3").stop(true, false).delay(0).animate({
				right: "-80%"
			}, 500);
		}
	)
	$('.div3 ul li').click(function() {
		$('.a_txt2:visible').slideUp().prev().removeClass('a_js2_on');
		var subnav = $(this).find('.a_txt2');
		console.log(subnav.is(':hidden'))
		if(subnav.is(':hidden')) {
			subnav.slideDown().prev().addClass('a_js2_on');
		} else {
			subnav.slideUp().prev().removeClass('a_js2_on');
		};
	})

});