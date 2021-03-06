function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(43.0683668,141.3488407),
    scrollwheel: false,
    zoom: 17
  });
  calcRoute('札幌　ビッグカメラ','札幌　ヨドバシカメラ');
  calcRoute('札幌駅','札幌　紀伊國屋書店');
  calcRoute('大通駅','北海道庁',[{location: '白石駅'}]);
  function calcRoute(start, end, waylist){
    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });
    // Set destination, origin and travel mode.
    var request = {
      destination: start,//{lat: 43.0620341,lng: 141.3521904},
      origin: end,//{lat: 43.0612343,lng: 142.3499813},
      waypoints: waylist,
      travelMode: google.maps.TravelMode.DRIVING
    };
    // Pass the directions request to the directions service.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        // Display the route on the map.
        directionsDisplay.setDirections(response);
      }
      else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}