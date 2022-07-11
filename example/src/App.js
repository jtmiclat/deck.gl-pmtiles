import React, { useState } from "react";
import DeckGL from "@deck.gl/react";
import { Map as StaticMap, MapProvider } from "react-map-gl";
import maplibregl from "maplibre-gl";
import PMTilesLayer from "deck.gl-pmtiles";

const Map = ({ props }) => {
  const [viewstate, setViewstate] = useState({
    latitude: 12.473718352618263,
    longitude: 122.15970582093894,
    zoom: 0,
    bearing: 0,
    pitch: 0,
  });

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <DeckGL
        layers={[
          new PMTilesLayer({
            id: "pmtiles",
            data: "https://protomaps-static.sfo3.digitaloceanspaces.com/mantle-trial.pmtiles",
            filled: true,
            lineWidthMinPixels: 1,
            pointRadiusMinPixels: 4,
            getPointRadius: 10,
            getFillColor: [255, 0, 0],
            getLineColor: [0, 255, 0],
            pickable: true,
          }),
        ]}
        initialViewState={viewstate}
        onViewStateChange={({ viewState }) => setViewstate(viewState)}
        controller={true}
        pickingRadius={5}
        ContextProvider={MapProvider}
      >
        <StaticMap
          mapLib={maplibregl}
          disableTokenWarning={true}
          mapStyle={
            "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json"
          }
        />
      </DeckGL>
    </div>
  );
};

export default Map;
