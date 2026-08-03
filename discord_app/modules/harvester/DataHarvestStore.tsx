import { Store } from "initialize";

let c0 = false;
let c1;
class DataHarvestStore extends Store {
}
const prototype = DataHarvestStore.prototype;
Object.defineProperty(prototype, "harvestType", {
  get: function harvestType() {
    return c1;
  },
  set: undefined
});
Object.defineProperty(prototype, "requestingHarvest", {
  get: function requestingHarvest() {
    return c0;
  },
  set: undefined
});
DataHarvestStore.displayName = "DataHarvestStore";
const dataHarvestStore = new DataHarvestStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let c1;
  },
  UPDATE_DATA_HARVEST_TYPE: function handleUpdateHarvestType(harvestType) {
    let c0 = false;
    harvestType = harvestType.harvestType;
  },
  LOAD_DATA_HARVEST_TYPE_START: function handleRequestingHarvest() {
    let c0 = true;
  },
  LOAD_DATA_HARVEST_TYPE_FAILURE: function handleRequestingHarvestFailure() {
    let c0 = false;
  },
  LOGOUT: function handleLogout() {
    let c0 = false;
    let c1 = null;
  }
});
const result = require("set").fileFinishedImporting("modules/harvester/DataHarvestStore.tsx");

export default dataHarvestStore;