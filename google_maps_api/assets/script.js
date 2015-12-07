$(function(){

  var map;
   
  var initialize = function(){
      mapOptions = {
      center: new google.maps.LatLng(0, 0),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById('map'), this.mapOptions);
      addMarker();
  }

  var addMarker  =function(){ 
    $('form').submit(function(e){
      e.preventDefault();
      var latLong = new google.maps.LatLng(getLat(), getLong());
      var markerOptions = {
      position: latLong,
      map: map,
      animation: google.maps.Animation.DROP,
      title: getMessage()
    };
    
    var marker = new google.maps.Marker(markerOptions);
    marker.setMap(map); 
    infoMarker(marker);
    return false;
   });
  }

    var getLat = function() {
      var latitude = parseInt($('input[name="latitude"]').val(),10);
      return restrict(latitude,85)|| 0;
  }

  var getLong = function() {
       var longitude = parseInt($('input[name="longitude"]').val(),10);
       return longitude || 0;
  }

  var getMessage = function() { 
    return $('input[name="message"]').val();
  }

  var infoMarker = function(marker){
    var infoWindowOptions = {
       content: marker.title
    };
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker,'click',function(e){
  
      infoWindow.open(map, marker);
  
    });
  }
  
  var restrict = function(x,max){
     if (x>max)
       return max;
     if (x<-max)
       return -max
     return x;
  }
 initialize();
});