// === Module 11372: getLastFetchTimeMs ===

// Module 11372 (getLastFetchTimeMs)
import { Store } from "initialize";

let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let closure_3 = [];
let closure_4 = {};
let closure_5 = {};
let closure_6 = {};
class ApplicationDirectoryCollectionsStore extends Store {
}
const prototype = ApplicationDirectoryCollectionsStore.prototype;
prototype["getLastFetchTimeMs"] = function getLastFetchTimeMs(arg0) {
  return table3["surface:" + arg0.surface + " activeState:" + arg0.activeState];
};
prototype["getFetchState"] = function getFetchState(arg0) {
  return table2["surface:" + arg0.surface + " activeState:" + arg0.activeState];
};
prototype["getCollections"] = function getCollections(arg0) {
  let tmp = table["surface:" + arg0.surface + " activeState:" + arg0.activeState];
  if (tmp == null) {
    tmp = closure_3;
  }
  return tmp;
};
obj = {
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function handleFetchAppDirectoryCollections(arg0) {
    let activeState;
    let surface;
    const obj = {};
    ({ surface, activeState } = arg0);
    const merged = Object.assign(obj);
    obj["surface:" + surface + " activeState:" + activeState] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function handleFetchAppDirectoryCollectionsSuccess(collections) {
    collections = collections.collections;
    const combined = "surface:" + collections.surface + " activeState:" + collections.activeState;
    const mapped = collections.map((application_directory_collection_items) => {
      application_directory_collection_items.application_directory_collection_items = callback(table[0]).sortBy(application_directory_collection_items.application_directory_collection_items, ["position", "id"]);
      return application_directory_collection_items;
    });
    let obj = importDefault(12);
    obj = {};
    const merged = Object.assign(obj);
    obj[combined] = obj.sortBy(mapped, ["position", "id"]);
    obj = {};
    const merged1 = Object.assign(obj);
    obj[combined] = obj.FETCHED;
    const obj1 = {};
    const timestamp = Date.now();
    const merged2 = Object.assign(obj1);
    obj1[combined] = timestamp;
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function handleFetchAppDirectoryCollectionsFailure(arg0) {
    let activeState;
    let surface;
    const obj = {};
    ({ surface, activeState } = arg0);
    const merged = Object.assign(obj);
    obj["surface:" + surface + " activeState:" + activeState] = obj.ERROR;
  }
};
const applicationDirectoryCollectionsStore = new ApplicationDirectoryCollectionsStore(require("dispatcher"), obj);
const result = require("dispatcher").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx");

export default applicationDirectoryCollectionsStore;
export const FetchState = obj;