
	mapboxgl.accessToken = 'pk.eyJ1IjoiZ21vbmV5MTk5OSIsImEiOiJja3hqNnRvdGsybnJmMnZtZmZqeDN0Z2p0In0.Q_o4zsKscAwEuVlm2G6SgA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/gmoney1999/ckxhtfrqd084v14qvmovwrwo9',
        zoom: 2,
        center: [-98.55589180231358,39.81785546092027]
    });

    // Add the control to the map.
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


    // Wait until the map has finished loading.
    map.on('load', () => {

    map.on('click', 'public-schools-1-d9vqap', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)





      .setHTML("<table><tr><th>" + e.features[0].properties.NAME +"</tr></th>"+ "<tr><td>" + "NCES ID# :" +"</td>" + "<td>"+e.features[0].properties.NCESID +"</td></tr><tr><td>"+ e.features[0].properties.ADDRESS  +"<sub> , </sub>" + e.features[0].properties.CITY  +"<sub> , </sub>"+ e.features[0].properties.STATE  +"<sub> , </sub>"+ e.features[0].properties.ZIP +"<sub> , </sub>"+ e.features[0].properties.STATE + "<sub> , </sub><br>"+ e.features[0].properties.TELEPHONE + "</td></tr><td>"+ "</td></tr><tr><td>"+ "<p><a href='" + e.features[0].properties.SOURCE + "'>GLOBALLOCATOR</a></p>" + "</td></tr><tr><td>"+ "<p><a href='" + e.features[0].properties.WEBSITE + "'>School Website</a></p>" + "<tr></table>" )

      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter','public-schools-1-d9vqap', () => {
    map.getCanvas().style.cursor = 'pointer';  t
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'public-schools-1-d9vqap', () => {
    map.getCanvas().style.cursor = '';
  });


  map.on('click', 'private-schools1-afh89i', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)





      .setHTML("<table><tr><th>" + e.features[0].properties.NAME +"</tr></th>"+ "<tr><td>" + "NCES ID# :" +"</td>" + "<td>"+e.features[0].properties.NCESID +"</td></tr><tr><td>"+ e.features[0].properties.ADDRESS  +"<sub> , </sub>" + e.features[0].properties.CITY  +"<sub> , </sub>"+ e.features[0].properties.STATE  +"<sub> , </sub>"+ e.features[0].properties.ZIP +"<sub> , </sub>"+ e.features[0].properties.STATE + "<sub> , </sub><br>"+ e.features[0].properties.TELEPHONE + "</td></tr><td>"+ "</td></tr><tr><td>"+ "<p><a href='" + e.features[0].properties.SOURCE + "'>GLOBALLOCATOR</a></p>" + "</td></tr><tr><td>"+ "<p><a href='" + e.features[0].properties.WEBSITE + "'>School Website</a></p>" + "<tr></table>" )

      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter','private-schools1-afh89i', () => {
    map.getCanvas().style.cursor = 'pointer';  t
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'private-schools1-afh89i', () => {
    map.getCanvas().style.cursor = '';
  });

  map.on('click', 'public-schools-2-5va7a2', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)





      .setHTML("<table><tr><th>" + e.features[0].properties.NAME +"</tr></th>"+ "<tr><td>" + "NCES ID# :" +"</td>" + "<td>"+e.features[0].properties.NCESID +"</td></tr><tr><td>"+ e.features[0].properties.ADDRESS  +"<sub> , </sub>" + e.features[0].properties.CITY  +"<sub> , </sub>"+ e.features[0].properties.STATE  +"<sub> , </sub>"+ e.features[0].properties.ZIP +"<sub> , </sub>"+ e.features[0].properties.STATE + "<sub> , </sub><br>"+ e.features[0].properties.TELEPHONE + "</td></tr><td>"+ "</td></tr><tr><td>"+ "<p><a href='" + e.features[0].properties.SOURCE + "'>GLOBALLOCATOR</a></p>" + "</td></tr><tr><td>"+ "<p><a href='" + e.features[0].properties.WEBSITE + "'>School Website</a></p>" + "<tr></table>" )

      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter','public-schools-2-5va7a2', () => {
    map.getCanvas().style.cursor = 'pointer';  t
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'public-schools-2-5va7a2', () => {
    map.getCanvas().style.cursor = '';
  });

    });

    // After the last frame rendered before the map enters an "idle" state.
    map.on('idle', () => {
        // If these two layers were not added to the map, abort
        if (!map.getLayer('Tornado') || !map.getLayer('Landslide') || !map.getLayer('River Flooding') || !map.getLayer('Winter Storm') || !map.getLayer('Earthquake Data') || !map.getLayer('Drought Data') || !map.getLayer('Costal Flooding Data') || !map.getLayer('Avalanche Data') || !map.getLayer('Avalanche Data') || !map.getLayer('Hurricane Data') || !map.getLayer('Wildfire Data') || !map.getLayer('public-schools-2-5va7a2') || !map.getLayer('public-schools-1-d9vqap')) {
            return;
        }

        // Enumerate ids of the layers.
        const toggleableLayerIds = ['Tornado', 'Landslide', 'River Flooding', 'Winter Storm', 'Earthquake Data', 'Drought Data', 'Costal Flooding Data', 'Avalanche Data', 'Hurricane Data', 'Wildfire Data', 'public-schools-2-5va7a2', 'Public_Schools_1-d9vqap'  ];

        // Set up the corresponding toggle button for each layer.
        for (const id of toggleableLayerIds) {
            // Skip layers that already have a button set up.
            if (document.getElementById(id)) {
                continue;
            }

            // Create a link.
            const link = document.createElement('a');
            link.id = id;
            link.href = '#';
            link.textContent = id;
            link.className = 'active';

            // Show or hide layer when the toggle is clicked.
            link.onclick = function (e) {
                const clickedLayer = this.textContent;
                e.preventDefault();
                e.stopPropagation();

                const visibility = map.getLayoutProperty(
                    clickedLayer,
                    'visibility'
                );

                // Toggle layer visibility by changing the layout object's visibility property.
                if (visibility === 'visible') {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                    this.className = '';
                } else {
                    this.className = 'active';
                    map.setLayoutProperty(
                        clickedLayer,
                        'visibility',
                        'visible'
                    );
                }
            };

            const layers = document.getElementById('menu');
            layers.appendChild(link);
        }
    });
