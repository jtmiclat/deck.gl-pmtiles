# deck.gl layer for pmtiles


A proof of concept deck.gl layer for accessing pmtiles.

Checkout https://github.com/Matico-Platform/deck.gl-pmtiles if you need a better supported package! 

## Usage

Pass url to a public pmtiles file that accept http range requests

```jsx
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
/>
```

### Notes

It is probably better to host pmtiles behind a serverless function w/ caching in production. The goal of this repo is to have an easy way to access pmtiles for deck.gl application.

## Read more about the tech

- [PMtiles](https://github.com/protomaps/PMTiles)
- [deck.gl](https://github.com/vis.gl/vis.gl)
- [deck.gl-pmtiles](https://github.com/Matico-Platform/deck.gl-pmtiles)
