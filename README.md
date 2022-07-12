# deck,gl layer for pmtiles

A work in progress deck.gl layer for accessing pmtiles.

## Usage

Pass data which is a url to a public pmtiles file that accept http range requests

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

It is probably better to host pmtiles behind a serverless function w/ caching in production. The goal of this repo is to have an easy way to access pmtiles for deck.gl application. These application are focused on data viz use case and have a different access pattern than other mapping applications.

## TODO

- [x] Get it to work
- [x] Build simple example
- [ ] Convert to typescript
- [ ] Error for when URL does not accept range request
- [ ] Tests
- [x] Deploy as package

## Read more about the tech

- [PMtiles](https://github.com/protomaps/PMTiles)
- [deck.gl](https://github.com/vis.gl/vis.gl)
