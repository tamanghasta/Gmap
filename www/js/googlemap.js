/**
 * Created by hasta on 29/04/15.
 */
function GoogleMap(){

    this.initialize = function(){
        var map = showMap();
        addMarkersToMap(map);

    }

    var showMap = function(){
        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(51.5000, 0.1167),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        return map;
    }

    var addMarkersToMap = function(map){

        var lat = "";
        var long = "";

        function success(pos){
            var crd = pos.coords;
            lat = crd.latitude;
            long = crd.longitude;

            var latitudeAndLongitudeOne = new google.maps.LatLng(lat, long);

            var markerOne = new google.maps.Marker({
                position: latitudeAndLongitudeOne,
                map: map,
                title : 'Your Current Location'
            });
        }

       navigator.geolocation.getCurrentPosition(success);


    }
}