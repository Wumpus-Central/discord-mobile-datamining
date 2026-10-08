// === Module 9031: DeveloperActivityShelfStore ===

// Module 9031 (DeveloperActivityShelfStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserSettings from "UserSettings" /* 2040 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;

require = fn;
let closure_2 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
const DevShelfFetchState = { INITIALIZED: "INITIALIZED", LOADING: "LOADING", LOADED: "LOADED", ERROR: "ERROR" };
let ERROR = DevShelfFetchState.INITIALIZED;
let closure_5 = [];
const PersistedStore = initializeDefault.PersistedStore;
class DeveloperActivityShelfStore extends PersistedStore {
}
const prototype = DeveloperActivityShelfStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const merged = Object.assign(obj);
  closure_2 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
};
prototype["getState"] = function getState() {
  return closure_2;
};
prototype["getIsEnabled"] = function getIsEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
  let setting = DeveloperMode.getSetting();
  if (setting) {
    setting = closure_5.length > 0;
  }
  return setting;
};
prototype["getLastUsedObject"] = function getLastUsedObject() {
  return closure_2.lastUsedObject;
};
prototype["getUseActivityUrlOverride"] = function getUseActivityUrlOverride() {
  let useActivityUrlOverride = this.getIsEnabled();
  if (useActivityUrlOverride) {
    useActivityUrlOverride = closure_2.useActivityUrlOverride;
  }
  return useActivityUrlOverride;
};
prototype["getActivityUrlOverride"] = function getActivityUrlOverride() {
  let activityUrlOverride = null;
  if (this.getIsEnabled()) {
    activityUrlOverride = closure_2.activityUrlOverride;
  }
  return activityUrlOverride;
};
prototype["getFetchState"] = function getFetchState() {
  return ERROR;
};
prototype["getFilter"] = function getFilter() {
  let str = "";
  if (this.getIsEnabled()) {
    str = closure_2.filter;
  }
  return str;
};
prototype["getDeveloperShelfItems"] = function getDeveloperShelfItems() {
  return this.getIsEnabled() ? closure_5 : [];
};
prototype["inDevModeForApplication"] = function inDevModeForApplication(id) {
  closure_0 = id;
  let isEnabled = this.getIsEnabled();
  if (isEnabled) {
    isEnabled = null != closure_5.find((id) => id.id === closure_0);
  }
  return isEnabled;
};
DeveloperActivityShelfStore.displayName = "DeveloperActivityShelfStore";
DeveloperActivityShelfStore.persistKey = "DeveloperActivityShelfStore";
const items = [
  (arg0) => {
    delete tmp2[tmp];
    const merged = Object.assign(arg0);
    return {};
  }
];
DeveloperActivityShelfStore.migrations = items;
const developerActivityShelfStore = new DeveloperActivityShelfStore(DispatcherDefault, {
  LOGOUT: function reset() {
    closure_2 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
    ERROR = obj.INITIALIZED;
    closure_5 = [];
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function handleToggleUseActivityUrlOverride() {
    closure_2.useActivityUrlOverride = !closure_2.useActivityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function handleSetActivityUrlOverride(activityUrlOverride) {
    closure_2.activityUrlOverride = activityUrlOverride.activityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function handleMarkActivityUsed(applicationId) {
    applicationId = applicationId.applicationId;
    if (null == closure_5.find((id) => id.id === applicationId)) {
      return false;
    } else {
      closure_2.lastUsedObject[applicationId] = applicationId.timestamp;
    }
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    ERROR = obj.LOADING;
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function handleEmbeddedActivitiesFetchDeveloperApplicationsSuccess(applications) {
    applications = applications.applications;
    ERROR = obj.LOADED;
    closure_5 = applications.filter((supportsEmbeddedSurface) => supportsEmbeddedSurface.supportsEmbeddedSurface(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN));
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function handleEmbeddedActivitiesFetchDeveloperApplicationsFail(arg0) {
    ERROR = obj.ERROR;
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function handleUpdateFilter(arg0) {
    closure_2.filter = arg0.filter;
  },
  USER_SETTINGS_PROTO_UPDATE() {

  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/DeveloperActivityShelfStore.tsx");

export default developerActivityShelfStore;
export { DevShelfFetchState };