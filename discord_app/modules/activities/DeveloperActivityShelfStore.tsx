// discord_app/modules/activities/DeveloperActivityShelfStore.tsx
import { ApplicationFlags } from "ME";
import { PersistedStore } from "initialize";
import { explicitContentFromProto } from "../user_settings/UserSettings.tsx";

let closure_3 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
let obj = { INITIALIZED: "INITIALIZED", LOADING: "LOADING", LOADED: "LOADED", ERROR: "ERROR" };
let INITIALIZED = obj.INITIALIZED;
let closure_6 = [];
class DeveloperActivityShelfStore extends PersistedStore {
}
const prototype = DeveloperActivityShelfStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  obj = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
  if (arg0 == null) {
    obj = {};
  }
  const merged = Object.assign(obj);
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["getIsEnabled"] = function getIsEnabled() {
  const DeveloperMode = explicitContentFromProto /* explicitContentFromProto */.DeveloperMode;
  let setting = DeveloperMode.getSetting();
  if (setting) {
    setting = closure_6.length > 0;
  }
  return setting;
};
prototype["getLastUsedObject"] = function getLastUsedObject() {
  return closure_3.lastUsedObject;
};
prototype["getUseActivityUrlOverride"] = function getUseActivityUrlOverride() {
  let useActivityUrlOverride = this.getIsEnabled();
  if (useActivityUrlOverride) {
    useActivityUrlOverride = closure_3.useActivityUrlOverride;
  }
  return useActivityUrlOverride;
};
prototype["getActivityUrlOverride"] = function getActivityUrlOverride() {
  let activityUrlOverride = null;
  if (this.getIsEnabled()) {
    activityUrlOverride = closure_3.activityUrlOverride;
  }
  return activityUrlOverride;
};
prototype["getFetchState"] = function getFetchState() {
  return INITIALIZED;
};
prototype["getFilter"] = function getFilter() {
  let str = "";
  if (this.getIsEnabled()) {
    str = closure_3.filter;
  }
  return str;
};
prototype["getDeveloperShelfItems"] = function getDeveloperShelfItems() {
  return this.getIsEnabled() ? closure_6 : [];
};
prototype["inDevModeForApplication"] = function inDevModeForApplication(closure_1) {
  let closure_0 = closure_1;
  let isEnabled = this.getIsEnabled();
  if (isEnabled) {
    isEnabled = null != closure_6.find((id) => id.id === closure_0);
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
obj = {
  LOGOUT: function reset() {
    let closure_3 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
    const INITIALIZED = obj.INITIALIZED;
    let closure_6 = [];
  },
  DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE: function handleToggleUseActivityUrlOverride() {
    closure_3.useActivityUrlOverride = !closure_3.useActivityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE: function handleSetActivityUrlOverride(activityUrlOverride) {
    closure_3.activityUrlOverride = activityUrlOverride.activityUrlOverride;
  },
  DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED: function handleMarkActivityUsed(applicationId) {
    applicationId = applicationId.applicationId;
    if (null == closure_6.find((id) => id.id === applicationId)) {
      return false;
    } else {
      closure_3.lastUsedObject[applicationId] = applicationId.timestamp;
    }
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_START() {
    const LOADING = obj.LOADING;
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function handleEmbeddedActivitiesFetchDeveloperApplicationsSuccess(applications) {
    applications = applications.applications;
    const LOADED = obj.LOADED;
    let closure_6 = applications.filter((application) => callback(table[1]).hasApplicationFlag(application, constants.EMBEDDED));
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function handleEmbeddedActivitiesFetchDeveloperApplicationsFail(arg0) {
    const ERROR = obj.ERROR;
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function handleUpdateFilter(arg0) {
    closure_3.filter = arg0.filter;
  },
  USER_SETTINGS_PROTO_UPDATE() {

  }
};
const developerActivityShelfStore = new DeveloperActivityShelfStore(require("dispatcher"), obj);
const result = require("initialize").fileFinishedImporting("modules/activities/DeveloperActivityShelfStore.tsx");

export default developerActivityShelfStore;
export const DevShelfFetchState = obj;