// Initialize and add the map
function initMap() {  
    
        //다중 선택
        var locations = [
            ["나이키 명동점", 37.562520226510195, 126.98463171763075],
            ["교하 직영 상설점", 37.71758648828867, 126.69365123897863],
            ["나이키 강남", 37.50244976188053, 127.02592466913029],
            ["김포 직영 상설점", 37.59914495029447, 126.78591776424115],
            ["이천 직영 상설점", 37.242413627190324, 127.40007305136774],
            ["여주 직영 상설점", 37.24081559820831, 127.61218749796029],
            ["구로 직영 상설점", 37.47748593743596, 126.88766245961301],
            ["양주 직영 상설점", 37.83163605624515, 127.05245499427963],
            ["청주 직영 상설점", 36.645519755905255, 127.42206331094772],
            ["김해 직영 상설점", 35.1853039269765, 128.82966499791968],
            ["부산 직영 상설점", 35.32369536795213, 129.23617915559282],
            ["시흥 직영 상설점", 37.37928802827994, 126.73754930165576],
            ["송도 직영 상설점", 37.38051072190817, 126.6563340574354],
            ["용인 직영 상설점", 37.225353813403956, 127.12135509476012],
            ["대구 직영 상설점", 35.922051167897514, 128.63693069133942],
            ["남양주 유나이티드", 37.61622135727954, 127.15138635563818]
        ];
    
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(37.562520226510195, 126.98463171763075),
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