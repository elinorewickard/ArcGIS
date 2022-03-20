require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
  const map = new Map({
    basemap: "topo-vector"
  });
  const view = new MapView({
    container: "viewDiv", // Reference to the view div created in step 5
    map: map, // Reference to the map object created before the view
    zoom: 6, // Sets zoom level based on level of detail (LOD)
    center: [-114.78, 43.827] // Sets center point of view using longitude,latitude
  });
});








// require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
//     const map = new Map({
//       basemap: "topo-vector"
//     });
//     const view = new MapView({
//       container: "viewDiv", // Reference to the view div created in step 5
//       map: map, // Reference to the map object created before the view
//       zoom: 5, // Sets zoom level based on level of detail (LOD)
//       center: [44.068203,-114.043564] // Sets center point of view using longitude,latitude
//     });

// //     var mapServiceURL = "https://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer";
// //     myMap.addLayer(new ArcGISTiledMapServiceLayer(mapServiceURL));
// //     myMap.addLayer(mapServiceURL);

// //     myMap.on("extent-change", setExtent);
// // })

// // function setExtent(){
// //  var extentString = "";
// //  extentString = "XMin: " + -117.243027 +
// //    " YMin: " + 41.988057 +
// //    " XMax: " +  -111.043564 +
// //    " YMax: " + 49.001146;
// //  document.getElementById("onExtentChangeInfo").innerHTML = extentString;
//   });