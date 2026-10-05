// discord_app/modules/applications/ApplicationAssetsStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleFetchEmbeddedActivityShelfSuccess(assets) {
  assets = assets.assets;
  obj = {};
  const merged = Object.assign(obj);
  for (const key10012 in assets) {
    obj[key10012] = obj.FETCH_SUCCESS;
    let tmp3 = assets[key10012];
    let obj4 = _modDef12;
    let keyByResult = obj4.keyBy(tmp3, "name") ?? {};
    let obj2 = { assets: keyByResult, lastUpdated: Date.now() };
    let _Date = Date;
    closure_4[key10012] = obj2;
    continue;
  }
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCH_SUCCESS: 2, [2]: "FETCH_SUCCESS" };
obj = {};
const React3 = {};
const Store = get_initializedDefault.Store;
class ApplicationAssetsStore extends Store {
  getApplicationAssetFetchState(id) {
    let NOT_FETCHED = obj[id];
    if (NOT_FETCHED == null) {
      NOT_FETCHED = obj.NOT_FETCHED;
    }
    return NOT_FETCHED;
  }
  getFetchingIds() {
    const entries = Object.entries(obj);
    const found = entries.filter((item) => {
      let tmp;
      [, tmp] = item;
      return tmp === constants.FETCHING;
    });
    const items = [
      ...found.map((item) => {
        let tmp;
        [tmp] = item;
        return tmp;
      }),
    ];
    return items;
  }
  getApplicationAssets(id) {
    return closure_4[id];
  }
}
const prototype = ApplicationAssetsStore.prototype;
ApplicationAssetsStore.displayName = "ApplicationAssetsStore";
let obj2 = {
  APPLICATION_ASSETS_FETCH: function handleFetchApplicationAssets(applicationId) {
    obj = {};
    applicationId = applicationId.applicationId;
    const merged = Object.assign(obj);
    obj[applicationId] = obj.FETCHING;
  },
  APPLICATION_ASSETS_FETCH_SUCCESS: function handleFetchApplicationAssetsSuccess(applicationId) {
    obj = {};
    applicationId = applicationId.applicationId;
    const merged = Object.assign(obj);
    obj[applicationId] = obj.FETCH_SUCCESS;
  },
  APPLICATION_ASSETS_UPDATE: function handleUpdateApplicationAssets(arg0) {
    let applicationId;
    let assets;
    ({ applicationId, assets } = arg0);
    if (null != assets) {
      obj = _modDef12;
      let keyByResult = obj.keyBy(assets, "name");
      if (keyByResult == null) {
        keyByResult = {};
      }
      const _Date = Date;
      closure_4[applicationId] = { assets: keyByResult, lastUpdated: Date.now() };
      const obj2 = { assets: keyByResult, lastUpdated: Date.now() };
    } else {
      delete closure_4[applicationId];
    }
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: handleFetchEmbeddedActivityShelfSuccess,
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: handleFetchEmbeddedActivityShelfSuccess,
};
const applicationAssetsStore = new ApplicationAssetsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/applications/ApplicationAssetsStore.tsx");

export default applicationAssetsStore;
export const FetchState = obj;
