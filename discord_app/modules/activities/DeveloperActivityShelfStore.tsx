// discord_app/modules/activities/DeveloperActivityShelfStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import EmbeddedSurfaceType from "../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2, closure_5;

const React2 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
const DevShelfFetchState = { INITIALIZED: "INITIALIZED", LOADING: "LOADING", LOADED: "LOADED", ERROR: "ERROR" };
let ERROR = DevShelfFetchState.INITIALIZED;
const hasOwnProperty = [];
const PersistedStore = get_initializedDefault.PersistedStore;
class DeveloperActivityShelfStore extends PersistedStore {
  initialize(arg0) {
    let obj = arg0;
    const obj2 = { lastUsedObject: {}, useActivityUrlOverride: false, activityUrlOverride: null, filter: "" };
    if (arg0 == null) {
      obj = {};
    }
    const merged = Object.assign(obj);
    closure_2 = obj2;
  }
  getState() {
    return closure_2;
  }
  getIsEnabled() {
    const DeveloperMode = UserSettings.DeveloperMode;
    const setting = DeveloperMode.getSetting() && closure_5.length > 0;
    return setting;
  }
  getLastUsedObject() {
    return closure_2.lastUsedObject;
  }
  getUseActivityUrlOverride() {
    const useActivityUrlOverride = this.getIsEnabled() && closure_2.useActivityUrlOverride;
    return useActivityUrlOverride;
  }
  getActivityUrlOverride() {
    let activityUrlOverride = null;
    if (this.getIsEnabled()) {
      activityUrlOverride = closure_2.activityUrlOverride;
    }
    return activityUrlOverride;
  }
  getFetchState() {
    return ERROR;
  }
  getFilter() {
    let str = "";
    if (this.getIsEnabled()) {
      str = closure_2.filter;
    }
    return str;
  }
  getDeveloperShelfItems() {
    return this.getIsEnabled() ? closure_5 : [];
  }
  inDevModeForApplication(id) {
    let closure_0 = id;
    const isEnabled = this.getIsEnabled() && null != closure_5.find((id) => id.id === closure_0);
    return isEnabled;
  }
}
const prototype = DeveloperActivityShelfStore.prototype;
DeveloperActivityShelfStore.displayName = "DeveloperActivityShelfStore";
DeveloperActivityShelfStore.persistKey = "DeveloperActivityShelfStore";
const items = [
  (arg0) => {
    delete arg0["isEnabled"];
    const obj = {};
    const merged = Object.assign(arg0);
    return obj;
  },
];
DeveloperActivityShelfStore.migrations = items;
let obj2 = {
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
    const timestamp = applicationId.timestamp;
    if (null == closure_5.find((id) => id.id === applicationId)) {
      return false;
    } else {
      closure_2.lastUsedObject[applicationId] = timestamp;
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
    closure_5 = applications.filter((supportsEmbeddedSurface) =>
      supportsEmbeddedSurface.supportsEmbeddedSurface(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN),
    );
  },
  DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL: function handleEmbeddedActivitiesFetchDeveloperApplicationsFail(arg0) {
    ERROR = obj.ERROR;
  },
  DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER: function handleUpdateFilter(arg0) {
    closure_2.filter = arg0.filter;
  },
  USER_SETTINGS_PROTO_UPDATE() {},
};
const developerActivityShelfStore = new DeveloperActivityShelfStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/activities/DeveloperActivityShelfStore.tsx");

export default developerActivityShelfStore;
export { DevShelfFetchState };
