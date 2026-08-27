// === Module 13276: harvestType ===

// Module 13276 (harvestType)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = false;
let c1;
const Store = initializeDefault.Store;
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
const dataHarvestStore = new DataHarvestStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    c1 = undefined;
  },
  UPDATE_DATA_HARVEST_TYPE: function handleUpdateHarvestType(harvestType) {
    c0 = false;
    harvestType = harvestType.harvestType;
  },
  LOAD_DATA_HARVEST_TYPE_START: function handleRequestingHarvest() {
    c0 = true;
  },
  LOAD_DATA_HARVEST_TYPE_FAILURE: function handleRequestingHarvestFailure() {
    c0 = false;
  },
  LOGOUT: function handleLogout() {
    c0 = false;
    c1 = null;
  }
});
const result = require("set").fileFinishedImporting("modules/harvester/DataHarvestStore.tsx");

export default dataHarvestStore;