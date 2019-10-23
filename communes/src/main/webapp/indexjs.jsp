<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>communes</title>
<script type="text/javascript" src="js/communes.js"></script>
 <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 400px;
        width: 400px;
        float:right;
        padding:50px;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #container{
      width:300px
      }
    </style>
</head>
<body>
<h2>Recherche de communes</h2>
 <div id="weather"></div>
<form id="formID">
Par code postal <input name="cp" id="cp" size="8"> 
<button type="button" onclick="getCommunes()">Rechercher</button>
</form>
 <div id="map"></div>
<div id="container">

</div>  
<!--     <script>
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
    </script> -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_aEzPFrouCpHX71oI-Vifg8ar1YVOz_I&callback=initMap"
    async defer></script>

</body>
</html>