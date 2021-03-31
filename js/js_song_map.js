$(document).ready(function() {
	
	//메인메뉴 마우스오버시 서브메뉴 슬라이드 다운
    $('.gnb').mouseover(function() {
		$('.header-bottom-nav-sub-menu-container').css('height','400px');
	});
	$('.header-bottom-nav-sub-menu-container').mouseover(function() {
		$(this).css('height','400px');
	});
	
	
	
	//메인메뉴 마우스리브시 서브메뉴 슬라이드 업
    $('.gnb').mouseleave(function() {
		$('.header-bottom-nav-sub-menu-container').css('height','0px');
	});
	$('.header-bottom-nav-sub-menu-container').mouseleave(function() {
		$(this).css('height','0px');
	});
	
});


// 구글맵
//let map;


// Initialize and add the map
// 구글 API 키를 발급 받고 자동으로 구글이 준 거
function initMap() {
// 	// The location of Uluru
// 	const uluru = { lat: 37.5648375885496, lng: 126.98264477720946 };
// 	// The map, centered at Uluru
// 	const map = new google.maps.Map(document.getElementById("map"), {
// 	  zoom: 18,
// 	  center: uluru,
// 	});
// 	// The marker, positioned at Uluru
// 	const marker = new google.maps.Marker({
// 	  position: uluru,
// 	  map: map,
// 	});


	//다중 선택
	var locations = [
		['롯데 영프라자지점', 37.56498915885921, 126.9821149120606, 4],
		['두타점', 37.568253396139866, 127.00340279276917, 5],
		['나이키 NSW 왕십리 엔터 6', 37.56239119204116, 127.03842217322169, 3],
		['나이키 청량리점', 37.58298509581733, 127.04736559328408, 2],
		['Maroubra Nike Town Jordan Hoopdream Itaewon', 37.53607463779522, 126.99154898316286, 1]
	  ];

	  var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(37.568253396139866, 127.00340279276917),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	  });

	  var infowindow = new google.maps.InfoWindow();

    var marker, i;

	for (i = 0; i < locations.length; i++) {  
		marker = new google.maps.Marker({
		  position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		  map: map
		});
  
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		  return function() {
			infowindow.setContent(locations[i][0]);
			infowindow.open(map, marker);
		  }
		})(marker, i));


  }
}