// === Module 13710: DataHarvestStore ===

// Module 13710 (DataHarvestStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

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
const dataHarvestStore = new DataHarvestStore(DispatcherDefault, {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/harvester/DataHarvestStore.tsx");

export default dataHarvestStore;