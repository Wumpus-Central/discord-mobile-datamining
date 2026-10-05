// === Module 8694: ApplicationWidgetConfigStore ===

// Module 8694 (ApplicationWidgetConfigStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let closure_3, set;

function updateApplicationConfigs(configs) {
  if (0 !== Object.keys(configs).length) {
    const _Object3 = Object;
    function _loop() {
      set = new Set(obj.map((config_id) => config_id.config_id));
      let found;
      if (closure_3[_slicedToArray] != null) {
        found = arr.filter((config_id) => !set.has(config_id.config_id));
      }
      if (found == null) {
        found = [];
      }
      const items = [...tmp];
      closure_3[_slicedToArray] = items;
    }
    const entries = Object.entries(configs);
    const tmp = entries;
    const tmp17 = entries[Symbol.iterator]();
    while (tmp17 !== undefined) {
      let tmp5 = _slicedToArray(tmp2, 2);
      [_slicedToArray, obj] = tmp5;
      let _loopResult = _loop();
      continue;
    }
    obj = {};
    const merged = Object.assign(obj);
    const obj2 = {};
    const merged1 = Object.assign(obj2);
    const _Object = Object;
    const _Object2 = Object;
    const keys = Object.keys(configs);
    const merged2 = Object.assign(fromEntries(keys.map((item) => {
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
const _false = {};
obj = {};
let closure_6 = [];
let FAILURE = obj.NOT_FETCHED;
let closure_8 = [];
const Store = get_initializedDefault.Store;
class ApplicationWidgetConfigStoreClass extends Store {
  getConfig(arg0) {
    let first;
    if (closure_3[arg0] != null) {
      first = tmp[0];
    }
    return first;
  }
  getConfigs(arg0) {
    let tmp = closure_3[arg0];
    if (tmp == null) {
      tmp = closure_2;
    }
    return tmp;
  }
  getFetchState(arg0) {
    let NOT_FETCHED = obj[arg0];
    if (NOT_FETCHED == null) {
      NOT_FETCHED = obj.NOT_FETCHED;
    }
    return NOT_FETCHED;
  }
  getFeaturedFetchState() {
    return FAILURE;
  }
  getDeveloperFetchState() {
    return FAILURE;
  }
  getAllConfigsByApplication() {
    return closure_3;
  }
  getFeaturedApplicationIds() {
    return closure_6;
  }
  getDeveloperApplicationIds() {
    return closure_8;
  }
}
const prototype = ApplicationWidgetConfigStoreClass.prototype;
ApplicationWidgetConfigStoreClass.displayName = "ApplicationWidgetConfigStore";
let obj2 = {
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
    obj = { [configs.applicationId]: configs.configs };
    updateApplicationConfigs(obj);
  },
  APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function handleFetchFailure(applicationId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FAILURE;
  }
};
const applicationWidgetConfigStoreClass = new ApplicationWidgetConfigStoreClass(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/application_widget/ApplicationWidgetConfigStore.tsx");

export default applicationWidgetConfigStoreClass;
export const FetchState = obj;