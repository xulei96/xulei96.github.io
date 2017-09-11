window.onload=function () {
	myScroll()
	$(window).scroll(function () {
		myScroll()
	});
	$(".m-development").hover(function () {
		$(this).children(".hidden-bg").stop().animate({
			opacity: "0"
		},200)
	},function () {
		$(this).children(".hidden-bg").stop().animate({
			opacity: "1"
		},200)
	})
	/*点击播放音乐*/
	$(".sound-toggle.is-visible").click(function () {
		if ($(this).hasClass("is-playing")) {
			$(this).removeClass("is-playing")
			$("#sound-music")[0].pause()
		}else{
			$(this).addClass("is-playing")
			$("#sound-music")[0].play()
		}
//		$(this).removeClass("is-visible")
	})
//	$(".sound-toggle.is-visible").click(function () {
//		$(this).removeClass("is-playing")
////		$(this).addClass("is-visible")
//	})
}
function myScroll() {
	if ($(window).scrollTop()>50) {
		$(".m-bg").stop().animate({
			opacity : '0'
		},300)
	}else {
		$(".m-bg").stop().animate({
			opacity : '1'
		},300)
	}
}