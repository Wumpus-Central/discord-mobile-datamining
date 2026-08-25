// === Module 12657: updateApplicationConfigs ===

// Module 12657 (updateApplicationConfigs)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "_slicedToArray" /* 32 */;

function updateApplicationConfigs(configs) {
  if (0 !== Object.keys(configs).length) {
    const _Object3 = Object;
    function _loop() {
      const set = new Set(closure_1.map((config_id) => config_id.config_id));
      let found;
      if (obj[set] != null) {
        found = arr.filter((config_id) => !set.has(config_id.config_id));
      }
      if (found == null) {
        found = [];
      }
      const items = [...closure_1];
      obj[set] = items;
    }
    const entries = Object.entries(configs);
    const tmp17 = entries[Symbol.iterator]();
    while (tmp17 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp2, 2);
      [closure_0, obj] = tmp5;
      let _loopResult = _loop();
      continue;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(obj);
    const _Object = Object;
    const _Object2 = Object;
    const keys = Object.keys(configs);
    const merged2 = Object.assign(Object.fromEntries(keys.map((arg0) => {
      const items = [arg0, closure_1.SUCCESS];
      return items;
    })));
  }
}
function handleLogout() {
  closure_3 = {};
  closure_4 = {};
  NOT_FETCHED = obj.NOT_FETCHED;
  closure_6 = [];
  NOT_FETCHED = obj.NOT_FETCHED;
  closure_8 = [];
}
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", SUCCESS: "SUCCESS", FAILURE: "FAILURE" };
let closure_2 = [];
let closure_3 = {};
let closure_4 = {};
let NOT_FETCHED = obj.NOT_FETCHED;
let closure_6 = [];
NOT_FETCHED = obj.NOT_FETCHED;
let closure_8 = [];
const Store = initializeDefault.Store;
class ApplicationWidgetConfigStoreClass extends Store {
}
const prototype = ApplicationWidgetConfigStoreClass.prototype;
prototype["getConfig"] = function getConfig(arg0) {
  let first;
  if (dependencyMap[arg0] != null) {
    first = tmp[0];
  }
  return first;
};
prototype["getConfigs"] = function getConfigs(arg0) {
  let tmp = dependencyMap[arg0];
  if (tmp == null) {
    tmp = closure_2;
  }
  return tmp;
};
prototype["getFetchState"] = function getFetchState(arg0) {
  NOT_FETCHED = table[arg0];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getFeaturedFetchState"] = function getFeaturedFetchState() {
  return NOT_FETCHED;
};
prototype["getDeveloperFetchState"] = function getDeveloperFetchState() {
  return NOT_FETCHED;
};
prototype["getAllConfigsByApplication"] = function getAllConfigsByApplication() {
  return closure_3;
};
prototype["getFeaturedApplicationIds"] = function getFeaturedApplicationIds() {
  return closure_6;
};
prototype["getDeveloperApplicationIds"] = function getDeveloperApplicationIds() {
  return closure_8;
};
ApplicationWidgetConfigStoreClass.displayName = "ApplicationWidgetConfigStore";
obj = {
  LOGOUT: handleLogout,
  APPLICATION_WIDGET_CONFIG_DEBUG_RESET: handleLogout,
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function handleFeaturedFetchStart(arg0) {
    const FETCHING = obj.FETCHING;
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function handleFeaturedFetchSuccess(configs) {
    const SUCCESS = obj.SUCCESS;
    closure_6 = Object.keys(configs.configs);
    updateApplicationConfigs(configs.configs);
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function handleFeaturedFetchFailure() {
    const FAILURE = obj.FAILURE;
  },
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function handleDeveloperFetchStart() {
    const FETCHING = obj.FETCHING;
  },
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function handleDeveloperFetchSuccess(configs) {
    const SUCCESS = obj.SUCCESS;
    closure_8 = Object.keys(configs.configs);
    updateApplicationConfigs(configs.configs);
  },
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function handleDeveloperFetchFailure() {
    const FAILURE = obj.FAILURE;
  },
  APPLICATION_WIDGET_CONFIG_FETCH_START: function handleFetchStart(applicationId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FETCHING;
  },
  APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function handleFetchSuccess(configs) {
    updateApplicationConfigs({ [configs.applicationId]: configs.configs });
  },
  APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function handleFetchFailure(applicationId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FAILURE;
  }
};
const applicationWidgetConfigStoreClass = new ApplicationWidgetConfigStoreClass(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/application_widget/ApplicationWidgetConfigStore.tsx");

export default applicationWidgetConfigStoreClass;
export const FetchState = obj;