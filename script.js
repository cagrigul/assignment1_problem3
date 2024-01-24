// Initialize the Leaflet map
var map = L.map('map').setView([37.7, -122.4], 12);

// Add a tile layer from ArcGIS 
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri, HERE, Garmin, © OpenStreetMap',
    maxZoom: 16
}).addTo(map);

// Load GeoJSON data for San Francisco crimes 
$.getJSON('https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson', function(data) {
  // Extract coordinates from the GeoJSON features
  var coordinatesOnly = data.features.map(function(feature) {
    return [feature.geometry.coordinates[1], feature.geometry.coordinates[0], 1];
  });

  // Create and add the heat map layer
  var heat = L.heatLayer(coordinatesOnly).addTo(map);
});
