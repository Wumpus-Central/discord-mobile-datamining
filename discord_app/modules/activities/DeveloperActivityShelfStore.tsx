// discord_app/modules/activities/DeveloperActivityShelfStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import ApplicationFlagUtils from "../applications/utils/ApplicationFlagUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ApplicationFlags = Constants.ApplicationFlags;
let closure_3 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
let DevShelfFetchState = { INITIALIZED: "INITIALIZED", LOADING: "LOADING", LOADED: "LOADED", ERROR: "ERROR" };
let ERROR = DevShelfFetchState.INITIALIZED;
let closure_6 = [];
const PersistedStore = initializeDefault.PersistedStore;
class DeveloperActivityShelfStore extends PersistedStore {}
const prototype = DeveloperActivityShelfStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
  if (arg0 == null) {
    obj = {};
  }
  const merged = Object.assign(obj);
  closure_3 = obj;
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["getIsEnabled"] = function getIsEnabled() {
  const DeveloperMode = UserSettings.DeveloperMode;
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
  return ERROR;
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
prototype["inDevModeForApplication"] = function inDevModeForApplication(id) {
  closure_0 = id;
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
  },
];
DeveloperActivityShelfStore.migrations = items;
DevShelfFetchState = {
  LOGOUT: function reset() {
    closure_3 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
    ERROR = obj.INITIALIZED;
    closure_6 = [];
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
    ERROR = obj.LOADING;
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: function handleEmbeddedActivitiesFetchDeveloperApplicationsSuccess(
    applications,
  ) {
    applications = applications.applications;
    ERROR = obj.LOADED;
    closure_6 = applications.filter((item) => ApplicationFlagUtils.hasApplicationFlag(item, constants.EMBEDDED));
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function handleEmbeddedActivitiesFetchDeveloperApplicationsFail(arg0) {
    ERROR = obj.ERROR;
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function handleUpdateFilter(arg0) {
    closure_3.filter = arg0.filter;
  },
  USER_SETTINGS_PROTO_UPDATE() {},
};
const developerActivityShelfStore = new DeveloperActivityShelfStore(DispatcherDefault, DevShelfFetchState);
const result = size.fileFinishedImporting("modules/activities/DeveloperActivityShelfStore.tsx");

export default developerActivityShelfStore;
export { DevShelfFetchState };
