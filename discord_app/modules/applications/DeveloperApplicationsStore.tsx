// discord_app/modules/applications/DeveloperApplicationsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DeveloperApplicationsConstants from "DeveloperApplicationsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const DeveloperApplicationsFetchState = DeveloperApplicationsConstants.DeveloperApplicationsFetchState;
let INITIALIZED = DeveloperApplicationsFetchState.INITIALIZED;
let set = new Set();
const Store = get_initializedDefault.Store;
class DeveloperApplicationsStore extends Store {
  getFetchState() {
    return INITIALIZED;
  }
  isDeveloperOfApplication(arg0) {
    const hasItem = null != arg0 && set.has(arg0);
    return hasItem;
  }
}
const prototype = DeveloperApplicationsStore.prototype;
DeveloperApplicationsStore.displayName = "DeveloperApplicationsStore";
const obj = {
  LOGOUT: function reset() {
    INITIALIZED = DeveloperApplicationsFetchState.INITIALIZED;
    set = new Set();
  },
  DEVELOPER_APPLICATIONS_FETCH_START() {
    INITIALIZED = DeveloperApplicationsFetchState.LOADING;
  },
  DEVELOPER_APPLICATIONS_FETCH_SUCCESS: function handleFetchSuccess(applicationIds) {
    INITIALIZED = DeveloperApplicationsFetchState.LOADED;
    set = new Set(applicationIds.applicationIds);
  },
  DEVELOPER_APPLICATIONS_FETCH_FAIL() {
    INITIALIZED = DeveloperApplicationsFetchState.ERROR;
  },
};
const developerApplicationsStore = new DeveloperApplicationsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/applications/DeveloperApplicationsStore.tsx");

export default developerApplicationsStore;
