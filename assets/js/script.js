$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//字級大小
	$(".js-top-function button").click(function () {
		if ($(this).hasClass("js-font-sm")) {
			$("html").addClass("sm");
		} else if ($(this).hasClass("js-font-md")) {
			$("html").removeClass("sm").removeClass("lg");
		} else if ($(this).hasClass("js-font-lg")) {
			$("html").addClass("lg");
		}
		$(this).addClass("active");
		return false;
	})

	//主選單下拉
	$(".js-nav-item").hover(
		function () {
			$(this).find('.js-nav-link-dropdown').stop(true, true).slideDown();
		},
		function () {
			$(this).find('.js-nav-link-dropdown').stop(true, true).slideUp();
		}
	);
	//banner滑鼠滑動
	$('.carousel-inner').on('mousedown', function (e) {
		var startX = e.pageX || e.touches[0].pageX;
		$(this).on('mousemove touchmove', function (e) {
			var endX = e.pageX || e.touches[0].pageX;
			if (startX - endX > 50) {
				$('.carousel').carousel('next');
				$(this).off('mousemove touchmove');
			} else if (endX - startX > 50) {
				$('.carousel').carousel('prev');
				$(this).off('mousemove touchmove');
			}
		});
	}).on('mouseup touchend', function () {
		$(this).off('mousemove touchmove');
	});

	$(".js-toggle-btn").click(function () {
		$(this).toggleClass("active");
	})
	$(".js-table-btn").click(function () {
		if ($(this).hasClass("active")) {
			$(this).text("關閉內容");
			$(this).parents("tr").next("tr").slideDown();
		} else {
			$(this).text("開啟內容");
			$(this).parents("tr").next("tr").slideUp();
		}
	});
	$(".js-like-btn").click(function () {
		if ($(this).hasClass("active")) {
			$(this).text("不感興趣");
		} else {
			$(this).text("我感興趣");
		}
	});
	$(".js-dropdown-menu").find("a").click(function () {
		$(this).toggleClass("active");
		$(".js-dropdown-menu").find("a").not(this).removeClass("active");
	})

})//JS尾端	
