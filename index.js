import { MVTLayer } from "deck.gl";
import { PMTiles } from "pmtiles";

export class PMTilesLayer extends MVTLayer {
  static layerName = "PMTilesLayer";
  async _updateTileData() {
    let data = this.props.data;
    let tileJSON = null;
    let pmtiles = new PMTiles(data);
    this.setState({ data, tileJSON, pmtiles });
  }
  getTileData(loadProps) {
    const { data, binary, pmtiles } = this.state;
    const { index, signal } = loadProps;
    const { x, y, z } = index;
    let loadOptions = this.getLoadOptions();
    const { fetch } = this.props;
    const zxyPromise = pmtiles.getZxy(z, x, y);
    return zxyPromise.then((val) => {
      if (!val) {
        return null;
      }
      loadOptions = {
        ...loadOptions,
        mimeType: "application/x-protobuf",
        mvt: {
          ...loadOptions?.mvt,
          coordinates: this.context.viewport.resolution ? "wgs84" : "local",
          tileIndex: index,
          // Local worker debug
          // workerUrl: `modules/mvt/dist/mvt-loader.worker.js`
          // Set worker to null to skip web workers
          // workerUrl: null
        },
        gis: binary ? { format: "binary" } : {},
        fetch: {
          headers: {
            Range: "bytes=" + val.offset + "-" + (val.offset + val.length - 1),
          },
        },
      };
      return fetch(data, {
        propName: "data",
        layer: this,
        loadOptions,
        signal,
      });
    });
  }
}
export default PMTilesLayer;
