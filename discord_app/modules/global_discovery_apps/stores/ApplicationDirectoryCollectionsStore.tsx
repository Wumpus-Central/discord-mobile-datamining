// === Module 11687: ApplicationDirectoryCollectionsStore ===

// Module 11687 (ApplicationDirectoryCollectionsStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let application_directory_collection_items;

let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let closure_3 = [];
let obj2 = {};
obj = {};
let obj4 = {};
const Store = get_initializedDefault.Store;
class ApplicationDirectoryCollectionsStore extends Store {
  getLastFetchTimeMs(arg0) {
    return obj4["surface:" + arg0.surface + " activeState:" + arg0.activeState];
  }
  getFetchState(arg0) {
    return obj["surface:" + arg0.surface + " activeState:" + arg0.activeState];
  }
  getCollections(arg0) {
    let tmp = obj2["surface:" + arg0.surface + " activeState:" + arg0.activeState];
    if (tmp == null) {
      tmp = closure_3;
    }
    return tmp;
  }
}
const prototype = ApplicationDirectoryCollectionsStore.prototype;
obj2 = {
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function handleFetchAppDirectoryCollections(arg0) {
    let activeState;
    let surface;
    obj = {};
    ({ surface, activeState } = arg0);
    const merged = Object.assign(obj);
    obj["surface:" + surface + " activeState:" + activeState] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function handleFetchAppDirectoryCollectionsSuccess(collections) {
    collections = collections.collections;
    const combined = "surface:" + collections.surface + " activeState:" + collections.activeState;
    const mapped = collections.map((application_directory_collection_items) => {
      application_directory_collection_items = application_directory_collection_items.application_directory_collection_items;
      obj = _modDef12;
      application_directory_collection_items.application_directory_collection_items = obj.sortBy(application_directory_collection_items, ["position", "id"]);
      return application_directory_collection_items;
    });
    obj = _modDef12;
    obj2 = {};
    const sortByResult = obj.sortBy(mapped, ["position", "id"]);
    const merged = Object.assign(obj2);
    obj2[combined] = sortByResult;
    const obj3 = {};
    const merged1 = Object.assign(obj);
    obj3[combined] = obj.FETCHED;
    obj = obj3;
    obj4 = {};
    const timestamp = Date.now();
    const merged2 = Object.assign(obj4);
    obj4[combined] = timestamp;
  },
  APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function handleFetchAppDirectoryCollectionsFailure(arg0) {
    let activeState;
    let surface;
    obj = {};
    ({ surface, activeState } = arg0);
    const merged = Object.assign(obj);
    obj["surface:" + surface + " activeState:" + activeState] = obj.ERROR;
  }
};
const applicationDirectoryCollectionsStore = new ApplicationDirectoryCollectionsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryCollectionsStore.tsx");

export default applicationDirectoryCollectionsStore;
export const FetchState = obj;