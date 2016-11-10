// jQuery

$(document).ready(function () {


  $('button#goButton').click(function() {
    showMap();
    downloadWeather();
    downloadForecast();
  });

  function showMap () {

    var lat = document.getElementById('lat').value;
    var long = document.getElementById('lon').value;

    console.log("Showing Map");
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(lat, long),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'),
    myOptions);
    document.getElementById('map-canvas').style.display="block";
  };

  function downloadWeather() {

    var lat = document.getElementById('lat').value;
    var long = document.getElementById('lon').value;

    console.log("lat: " + lat + " lon: " + long);

    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+
    "&lon"+long+"&units=metric&APPID=6fab770060ef946f2b80bde294fcaa97";

    console.log("URL: " + url);

    $.getJSON(url, function(data){
      $("#currentTemp").innerHTML("Current: "+data.main.temp+"&#8451;");
       $("#lowTemp").html("Low: "+data.main.temp_min+"&#8451;");
       $("#hightTemp").html("High: "+data.main.temp_max+"&#8451;");
       $("#lookout").html(" "+data.weather.description);
       $("#direction").html("Direction: "+data.wind.deg+"&deg;");
       $("#speed").html("Speed: "+data.wind.speed+"m/s");
       $("#pressure").html("Pressure: "+data.main.pressure+"mB");
       $("#humidity").html("Humidity: "+data.main.humidity+"%");

    });
  };

  function downloadForecast() {

  };
});
