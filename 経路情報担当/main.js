function initialize() {
      var latlng = new google.maps.LatLng(43.0683668,141.3488407);
      var opts = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map_canvas"), opts);
      var marker2 = new google.maps.Marker({
        position: latlng,
        map: map
      });
}