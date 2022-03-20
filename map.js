require(["esri/config",
  "esri/Map", 
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Legend"], function (ersiConfig, Map, MapView, Graphic, GraphicsLayer, Legend) {
  const map = new Map({
    basemap: "hybrid"
  });
  const view = new MapView({
    container: "viewDiv", // Reference to the view div created in step 5
    map: map, // Reference to the map object created before the view
    zoom: 7, // Sets zoom level based on level of detail (LOD)
    center: [-114, 45] // Sets center point of view using longitude,latitude
  });

  // create graphics layer to draw graphics onto
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
  
  const legend = new Legend({
    view: view,
    layerInfos: graphicsLayer,
    title: "Marker Legend"
  });
  view.ui.add(legend, "bottom-left");

  //small pop size marker variable 0-25,000
  const marker = {
    type: "simple-marker",
    style: "triangle",
    color: [52,168,50] //green
  };
  //mid pop size marker 25,000-100,000
  const midmarker = {
    type: "simple-marker",
    style: "triangle",
    color: [247,241,54] //yellow
  };
  //large pop size marker 100,000+
  const largemarker = {
    type: "simple-marker",
    style: "triangle",
    color: [50,54,168] //blue
  };

  // marker when cliked on with say what county - later hope to have weather
  const popupTemplate = {
  title: "{Name}",
  content: "<br>Population: {Pop} <br>License Plate: {LP}",
  }

//adding markers onto graphicsLayer
  const ada = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.2420,
      latitude: 43.4788
    },
    symbol: largemarker,
    attributes: {Name: "Ada County", Pop: "494,967", LP: "1A"},
    popupTemplate: popupTemplate

  });

  const adams = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.4916,
      latitude: 44.9883
    },
    symbol: marker,
    attributes: {Name: "Adams County", Pop: "4,379", LP: "2A"},
    popupTemplate: popupTemplate

  });
  const bannock = new Graphic ({
    geometry: {
      type: "point",
      longitude: -112.1430,
      latitude: 42.5836
    },
    symbol: midmarker,
    attributes: {Name: "Bannock County", Pop: "87,018", LP: "1B"},
    popupTemplate: popupTemplate

  });
  const bear = new Graphic ({
    geometry: {
      type: "point",
      longitude: -111.2845,
      latitude: 42.2282
    },
    symbol: marker,
    attributes: {Name: "Bear Lake County", Pop: "6,372", LP: "2B"},
    popupTemplate: popupTemplate

  });
  const benewah = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.6499,
      latitude: 47.2438
    },
    symbol: marker,
    attributes: {Name: "Benewah County", Pop: "9,530", LP: "3B"},
    popupTemplate: popupTemplate

  });
  const bingham = new Graphic ({
    geometry: {
      type: "point",
      longitude: -112.3624,
      latitude: 43.2112
    },
    symbol: midmarker,
    attributes: {Name: "Bingham County", Pop: "47,992", LP: "4B"},
    popupTemplate: popupTemplate

  });
  const blaine = new Graphic ({
    geometry: {
      type: "point",
      longitude: -113.9664,
      latitude: 43.4743
    },
    symbol: marker,
    attributes: {Name: "Blaine County", Pop: "24,272", LP: "5B"},
    popupTemplate: popupTemplate

  });

  const boise = new Graphic ({
    geometry: {
      type: "point",
      longitude: -115.8563,
      latitude: 43.9605 
    },
    symbol: marker,
    attributes: {Name: "Boise County", Pop: "7,610", LP: "6B"},
    popupTemplate: popupTemplate

  });
  const bonner = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.5931,
      latitude: 48.2752
    },
    symbol: midmarker,
    attributes: {Name: "Bonner County", Pop: "47,110", LP: "7B"},
    popupTemplate: popupTemplate

  });
  const bonneville = new Graphic ({
    geometry: {
      type: "point",
      longitude: -111.5455,
      latitude: 43.4509
    },
    symbol: largemarker,
    attributes: {Name: "Bonneville County", Pop: "123,964", LP: "8B"},
    popupTemplate: popupTemplate

  });
  const boundary = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.5627,
      latitude: 48.7988
    },
    symbol: marker,
    attributes: {Name: "Boundary COunty", Pop: "12,056", LP: "9B"},
    popupTemplate: popupTemplate

  });
  const butte = new Graphic ({
    geometry: {
      type: "point",
      longitude: -113.1841,
      latitude: 43.6448
    },
    symbol: marker,
    attributes: {Name: "Butte County", Pop: "2,574", LP: "10B"},
    popupTemplate: popupTemplate

  });
  const camas = new Graphic ({
    geometry: {
      type: "point",
      longitude: -114.8244,
      latitude: 43.5094
    },
    symbol: marker,
    attributes: {Name: "Camas County", Pop: "1,117", LP: "1C"},
    popupTemplate: popupTemplate

  });

  const canyon = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.6865,
      latitude: 43.6780
    },
    symbol: largemarker,
    attributes: {Name: "Canyon County", Pop: "231,105", LP: "2C"},
    popupTemplate: popupTemplate

  });
  const caribou = new Graphic ({
    geometry: {
      type: "point",
      longitude: -111.6661,
      latitude: 42.7539
    },
    symbol: marker,
    attributes: {Name: "Caribou County", Pop: "7,027", LP: "3C"},
    popupTemplate: popupTemplate

  });
  const cassia = new Graphic ({
    geometry: {
      type: "point",
      longitude: -113.5729,
      latitude: 42.3580
    },
    symbol: marker,
    attributes: {Name: "Cassia County", Pop: "24,655", LP: "4C"},
    popupTemplate: popupTemplate

  });
  const clark = new Graphic ({
    geometry: {
      type: "point",
      longitude: -112.3755,
      latitude: 44.1976
    },
    symbol: marker,
    attributes: {Name: "Clark County", Pop: "790", LP: "5C"},
    popupTemplate: popupTemplate

  });
  const clearwater = new Graphic ({
    geometry: {
      type: "point",
      longitude: -115.5620,
      latitude: 46.6776
    },
    symbol: marker,
    attributes: {Name: "Clearwater County", Pop: "8,734", LP: "6C"},
    popupTemplate: popupTemplate

  });
  const custer  = new Graphic ({
    geometry: {
      type: "point",
      longitude: -114.2614,
      latitude: 44.3332
    },
    symbol: marker,
    attributes: {Name: "Custer County", Pop: "4,275", LP: "7C"},
    popupTemplate: popupTemplate

  });

  const elmore = new Graphic ({
    geometry: {
      type: "point",
      longitude: -115.5264,
      latitude: 43.1154
    },
    symbol: midmarker,
    attributes: {Name: "Elmore County", Pop: "28,666", LP: "E"},
    popupTemplate: popupTemplate

  });
  const franklin = new Graphic ({
    geometry: {
      type: "point",
      longitude: -111.7615,
      latitude: 42.2100
    },
    symbol: marker,
    attributes: {Name: "Franklin County", Pop: "14,194", LP: "1F"},
    popupTemplate: popupTemplate

  });
  const fremont = new Graphic ({
    geometry: {
      type: "point",
      longitude: -111.4790,
      latitude: 44.2243
    },
    symbol: marker,
    attributes: {Name: "Fremont County", Pop: "13,388", LP: "2F"},
    popupTemplate: popupTemplate

  });
  const gem = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.3589,
      latitude: 44.0325
    },
    symbol: marker,
    attributes: {Name: "Gem County", Pop: "19,123", LP: "1G"},
    popupTemplate: popupTemplate

  });
  const gooding = new Graphic ({
    geometry: {
      type: "point",
      longitude: -114.7494,
      latitude: 42.9181
    },
    symbol: marker,
    attributes: {Name: "Gooding County", Pop: "15,598", LP: "2G"},
    popupTemplate: popupTemplate

  });
  const idaho = new Graphic ({
    geometry: {
      type: "point",
      longitude: -115.7237,
      latitude: 45.9020
    },
    symbol: marker,
    attributes: {Name: "Idaho County", Pop: "16,541", LP: "I"},
    popupTemplate: popupTemplate

  });

  const jefferson = new Graphic ({
    geometry: {
      type: "point",
      longitude: -112.2494,
      latitude: 43.7641
    },
    symbol: midmarker,
    attributes: {Name: "Jefferson County", Pop: "30,891", LP: "1J"},
    popupTemplate: popupTemplate

  });

  const jerome = new Graphic ({
    geometry: {
      type: "point",
      longitude: -114.3288,
      latitude: 42.7128
    },
    symbol: marker,
    attributes: {Name: "Jerome County", Pop: "24,237", LP: "2J"},
    popupTemplate: popupTemplate

  });

  const kootenai = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.6222,
      latitude: 47.7568
    },
    symbol: largemarker,
    attributes: {Name: "Kootenai County", Pop: "171,362", LP: "K"},
    popupTemplate: popupTemplate

  });

  const latah = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.6764,
      latitude: 46.7360
    },
    symbol: midmarker,
    attributes: {Name: "Latah County", Pop: "39,517", LP: "1L"},
    popupTemplate: popupTemplate

  });

  const lemhi = new Graphic ({
    geometry: {
      type: "point",
      longitude: -113.9231,
      latitude: 45.0365
    },
    symbol: marker,
    attributes: {Name: "Lemhi County", Pop: "7,974", LP: "2L"},
    popupTemplate: popupTemplate

  });

  const lewis = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.4054,
      latitude: 46.2665
    },
    symbol: marker,
    attributes: {Name: "Lewis County", Pop: "3,533", LP: "3L"},
    popupTemplate: popupTemplate

  });

  const lincoln = new Graphic ({
    geometry: {
      type: "point",
      longitude: -114.1694,
      latitude: 43.0496
    },
    symbol: marker,
    attributes: {Name: "Lincoln County", Pop: "5,127", LP: "4L"},
    popupTemplate: popupTemplate

  });

  const madison = new Graphic ({
    geometry: {
      type: "point",
      longitude: -111.5584,
      latitude: 43.7508
    },
    symbol: midmarker,
    attributes: {Name: "Madison County", Pop: "52,913", LP: "1M"},
    popupTemplate: popupTemplate

  });

  const minidoka = new Graphic ({
    geometry: {
      type: "point",
      longitude: -113.5808,
      latitude: 42.8410
    },
    symbol: marker,
    attributes: {Name: "Minidoka County", Pop: "21,613", LP: "2M"},
    popupTemplate: popupTemplate

  });

  const nez = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.6229,
      latitude: 46.4182
    },
    symbol: midmarker,
    attributes: {Name: "Nez Perce County", Pop: "42,090", LP: "N"},
    popupTemplate: popupTemplate

  });

  const oneida = new Graphic ({
    geometry: {
      type: "point",
      longitude: -112.5245,
      latitude: 42.2060
    },
    symbol: marker,
    attributes: {Name: "Oneida County", Pop: "4,564", LP: "1O"},
    popupTemplate: popupTemplate

  });

  const owyhee = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.0623,
      latitude: 42.6827
    },
    symbol: marker,
    attributes: {Name: "Owyhee County", Pop: "11,913", LP: "2O"},
    popupTemplate: popupTemplate

  });

  const payette = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.7205,
      latitude: 44.0205 
    },
    symbol: midmarker,
    attributes: {Name: "Payette County", Pop: "25,386", LP: "1P"},
    popupTemplate: popupTemplate

  });

  const power = new Graphic ({
    geometry: {
      type: "point",
      longitude: -112.7685,
      latitude: 42.7528 
    },
    symbol: marker,
    attributes: {Name: "Power County", Pop: "7,878", LP: "2P"},
    popupTemplate: popupTemplate

  });

  const shoshone = new Graphic ({
    geometry: {
      type: "point",
      longitude: -115.9105,
      latitude: 47.1747
    },
    symbol: marker,
    attributes: {Name: "Shoshone County", Pop: "13,169", LP: "S"},
    popupTemplate: popupTemplate

  });

  const teton = new Graphic ({
    geometry: {
      type: "point",
      longitude: -111.1918,
      latitude: 43.7846
    },
    symbol: marker,
    attributes: {Name: "Teton County", Pop: "11,630", LP: "1T"},
    popupTemplate: popupTemplate

  });

  const twin = new Graphic ({
    geometry: {
      type: "point",
      longitude: -114.6759,
      latitude: 42.3353
    },
    symbol: midmarker,
    attributes: {Name: "Twin Falls County", Pop: "90,046", LP: "2T"},
    popupTemplate: popupTemplate

  });

  const valley = new Graphic ({
    geometry: {
      type: "point",
      longitude: -115.7926,
      latitude: 44.9205
    },
    symbol: marker,
    attributes: {Name: "Valley County", Pop: "11,746", LP: "V"},
    popupTemplate: popupTemplate

  });

  const washington = new Graphic ({
    geometry: {
      type: "point",
      longitude: -116.7549,
      latitude: 44.3659
    },
    symbol: marker,
    attributes: {Name: "Washinton County", Pop: "10,500", LP: "W"},
    popupTemplate: popupTemplate

  });
  
  //addings graphics to the layer
  graphicsLayer.add(ada);
  graphicsLayer.add(adams);
  graphicsLayer.add(bannock);
  graphicsLayer.add(bear);
  graphicsLayer.add(benewah);
  graphicsLayer.add(bingham);
  graphicsLayer.add(blaine);
  graphicsLayer.add(boise);
  graphicsLayer.add(bonner); 
  graphicsLayer.add(bonneville);
  graphicsLayer.add(boundary);
  graphicsLayer.add(butte);
  graphicsLayer.add(camas);
  graphicsLayer.add(canyon);
  graphicsLayer.add(caribou);
  graphicsLayer.add(cassia);
  graphicsLayer.add(clark);
  graphicsLayer.add(clearwater);
  graphicsLayer.add(custer);
  graphicsLayer.add(elmore);
  graphicsLayer.add(franklin);
  graphicsLayer.add(fremont);
  graphicsLayer.add(gem);
  graphicsLayer.add(gooding);
  graphicsLayer.add(idaho);
  graphicsLayer.add(jefferson);
  graphicsLayer.add(jerome);
  graphicsLayer.add(kootenai);
  graphicsLayer.add(latah);
  graphicsLayer.add(lemhi);
  graphicsLayer.add(lewis);
  graphicsLayer.add(lincoln);
  graphicsLayer.add(madison);
  graphicsLayer.add(minidoka);
  graphicsLayer.add(nez);
  graphicsLayer.add(oneida);
  graphicsLayer.add(owyhee);
  graphicsLayer.add(payette);
  graphicsLayer.add(power);
  graphicsLayer.add(shoshone);
  graphicsLayer.add(teton);
  graphicsLayer.add(twin);
  graphicsLayer.add(valley);
  graphicsLayer.add(washington);

});
