// discord_app/modules/applications/DeveloperApplicationsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DeveloperApplicationsConstants from "DeveloperApplicationsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const DeveloperApplicationsFetchState = DeveloperApplicationsConstants.DeveloperApplicationsFetchState;
let ERROR = DeveloperApplicationsFetchState.INITIALIZED;
let set = new Set();
const Store = initializeDefault.Store;
class DeveloperApplicationsStore extends Store {}
const prototype = DeveloperApplicationsStore.prototype;
prototype["getFetchState"] = function getFetchState() {
  return ERROR;
};
prototype["isDeveloperOfApplication"] = function isDeveloperOfApplication(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
DeveloperApplicationsStore.displayName = "DeveloperApplicationsStore";
const developerApplicationsStore = new DeveloperApplicationsStore(DispatcherDefault, {
  LOGOUT: function reset() {
    ERROR = DeveloperApplicationsFetchState.INITIALIZED;
    set = new Set();
  },
  DEVELOPER_APPLICATIONS_FETCH_START() {
    ERROR = DeveloperApplicationsFetchState.LOADING;
  },
  DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function handleFetchSuccess(applicationIds) {
    ERROR = DeveloperApplicationsFetchState.LOADED;
    set = new Set(applicationIds.applicationIds);
  },
  DEVELOPER_APPLICATIONS_FETCH_FAIL() {
    ERROR = DeveloperApplicationsFetchState.ERROR;
  },
});
const result = size.fileFinishedImporting("modules/applications/DeveloperApplicationsStore.tsx");

export default developerApplicationsStore;
