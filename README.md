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

## TODO

- [x] Get it to work
- [x] Build simple example
- [ ] Convert to typescript
- [ ] Error for when URL does not accept range request
- [ ] Tests
- [ ] Deploy as package

## Read more about the tech

- [PMtiles](https://github.com/protomaps/PMTiles)
- [deck.gl](https://github.com/vis.gl/vis.gl)
