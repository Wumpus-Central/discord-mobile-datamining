// === Module 9026: ApplicationWidgetConfigStore ===

// Module 9026 (ApplicationWidgetConfigStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _slicedToArray from "module_32" /* 32 */;

function updateApplicationConfigs(configs) {
  if (0 !== Object.keys(configs).length) {
    const _Object3 = Object;
    function _loop() {
      const set = new Set(obj.map((config_id) => config_id.config_id));
      let found;
      if (closure_3[_slicedToArray] != null) {
        found = arr.filter((config_id) => !set.has(config_id.config_id));
      }
      if (found == null) {
        found = [];
      }
      const items = [...obj];
      closure_3[_slicedToArray] = items;
    }
    const entries = Object.entries(configs);
    const tmp17 = entries[Symbol.iterator]();
    while (tmp17 !== undefined) {
      let tmp5 = _slicedToArray(tmp2, 2);
      [_slicedToArray, obj] = tmp5;
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
    const merged2 = Object.assign(Object.fromEntries(keys.map((item) => {
      const items = [item, obj.SUCCESS];
      return items;
    })));
  }
}
function handleLogout() {
  closure_3 = {};
  obj = {};
  closure_6 = [];
  FAILURE = obj.NOT_FETCHED;
  closure_8 = [];
}
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", SUCCESS: "SUCCESS", FAILURE: "FAILURE" };
let closure_2 = [];
const dependencyMap = {};
obj = {};
let closure_6 = [];
let FAILURE = obj.NOT_FETCHED;
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
  let NOT_FETCHED = obj[arg0];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getFeaturedFetchState"] = function getFeaturedFetchState() {
  return FAILURE;
};
prototype["getDeveloperFetchState"] = function getDeveloperFetchState() {
  return FAILURE;
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
    FAILURE = obj.FETCHING;
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function handleFeaturedFetchSuccess(configs) {
    FAILURE = obj.SUCCESS;
    closure_6 = Object.keys(configs.configs);
    updateApplicationConfigs(configs.configs);
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function handleFeaturedFetchFailure() {
    FAILURE = obj.FAILURE;
  },
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_START: function handleDeveloperFetchStart() {
    FAILURE = obj.FETCHING;
  },
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: function handleDeveloperFetchSuccess(configs) {
    FAILURE = obj.SUCCESS;
    closure_8 = Object.keys(configs.configs);
    updateApplicationConfigs(configs.configs);
  },
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_FAILURE: function handleDeveloperFetchFailure() {
    FAILURE = obj.FAILURE;
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
const applicationWidgetConfigStoreClass = new ApplicationWidgetConfigStoreClass(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/ApplicationWidgetConfigStore.tsx");

export default applicationWidgetConfigStoreClass;
export const FetchState = obj;