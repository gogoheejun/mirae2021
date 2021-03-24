$(document).ready(function() {
	
	//메인메뉴 마우스오버시 서브메뉴 슬라이드 다운
    $('.header-bottom-nav').mouseover(function() {
		$('.header-bottom-nav-sub-menu-container').css('height','170px');
	});
	$('.header-bottom-nav-sub-menu-container').mouseover(function() {
		$(this).css('height','170px');
	});
	
	
	
	//메인메뉴 마우스리브시 서브메뉴 슬라이드 업
    $('.header-bottom-nav').mouseleave(function() {
		$('.header-bottom-nav-sub-menu-container').css('height','0px');
	});
	$('.header-bottom-nav-sub-menu-container').mouseleave(function() {
		$(this).css('height','0px');
	});
	
});


