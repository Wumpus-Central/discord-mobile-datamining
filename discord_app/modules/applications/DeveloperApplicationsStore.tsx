// === Module 12350: DeveloperApplicationsStore ===

// Module 12350 (DeveloperApplicationsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DeveloperApplicationsConstants from "DeveloperApplicationsConstants" /* 12351 */;
import size from "module_2" /* 2 */;

const DeveloperApplicationsFetchState = DeveloperApplicationsConstants.DeveloperApplicationsFetchState;
let ERROR = DeveloperApplicationsFetchState.INITIALIZED;
let set = new Set();
const Store = initializeDefault.Store;
class DeveloperApplicationsStore extends Store {
}
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
  }
});
const result = size.fileFinishedImporting("modules/applications/DeveloperApplicationsStore.tsx");

export default developerApplicationsStore;