// discord_app/modules/applications/ApplicationAssetsStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

function handleFetchEmbeddedActivityShelfSuccess(assets) {
  assets = assets.assets;
  obj = {};
  const merged = Object.assign(obj);
  for (const key10012 in assets) {
    obj[key10012] = obj.FETCH_SUCCESS;
    let obj4 = applyDefault;
    let keyByResult = obj4.keyBy(assets[key10012], "name");
    if (keyByResult == null) {
      keyByResult = {};
    }
    obj = { assets: null, lastUpdated: null };
    obj[0] = keyByResult;
    let _Date = Date;
    obj[1] = Date.now();
    closure_4[key10012] = obj;
    continue;
  }
}
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCH_SUCCESS: 2, [2]: "FETCH_SUCCESS" };
let closure_3 = {};
let closure_4 = {};
const Store = initializeDefault.Store;
class ApplicationAssetsStore extends Store {
}
const prototype = ApplicationAssetsStore.prototype;
prototype["getApplicationAssetFetchState"] = function getApplicationAssetFetchState(id) {
  let NOT_FETCHED = table[id];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getFetchingIds"] = function getFetchingIds() {
  const entries = Object.entries(closure_3);
  const found = entries.filter((item, index) => {
    [, tmp] = item;
    return tmp === constants.FETCHING;
  });
  const items = [
    ...found.map((item, index) => {
      [tmp] = item;
      return tmp;
    })
  ];
  return items;
};
prototype["getApplicationAssets"] = function getApplicationAssets(closure_0) {
  return table2[closure_0];
};
ApplicationAssetsStore.displayName = "ApplicationAssetsStore";
obj = {
  APPLICATION_ASSETS_FETCH: function handleFetchApplicationAssets(applicationId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FETCHING;
  },
  APPLICATION_ASSETS_FETCH_SUCCESS: function handleFetchApplicationAssetsSuccess(applicationId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FETCH_SUCCESS;
  },
  APPLICATION_ASSETS_UPDATE: function handleUpdateApplicationAssets(assets) {
    assets = assets.assets;
    if (null != assets) {
      obj = applyDefault;
      let keyByResult = obj.keyBy(assets, "name");
      if (keyByResult == null) {
        keyByResult = {};
      }
      obj = { assets: null, lastUpdated: null };
      obj[0] = keyByResult;
      const _Date = Date;
      obj[1] = Date.now();
      closure_4[tmp3] = obj;
    } else {
      delete tmp[tmp2];
    }
  },
  EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: handleFetchEmbeddedActivityShelfSuccess,
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: handleFetchEmbeddedActivityShelfSuccess
};
const applicationAssetsStore = new ApplicationAssetsStore(dispatcherDefault, obj);
const result = require("obj132").fileFinishedImporting("modules/applications/ApplicationAssetsStore.tsx");

export default applicationAssetsStore;
export const FetchState = obj;