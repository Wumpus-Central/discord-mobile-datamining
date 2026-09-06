// === Module 7164: ApplicationDirectoryApplicationsStore ===

// Module 7164 (ApplicationDirectoryApplicationsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;

let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
obj = {};
obj = {};
let set = new Set();
obj = {};
const Store = initializeDefault.Store;
class ApplicationDirectoryApplicationsStore extends Store {
}
const prototype = ApplicationDirectoryApplicationsStore.prototype;
prototype["getApplication"] = function getApplication(arg0) {
  if (null != arg0) {
    return obj[arg0];
  }
};
prototype["getApplicationRecord"] = function getApplicationRecord(arg0) {
  if (null != arg0) {
    if (null != obj[arg0]) {
      return ApplicationRecord.createFromServer(tmp2);
    }
  }
};
prototype["getApplications"] = function getApplications() {
  return obj;
};
prototype["getApplicationFetchState"] = function getApplicationFetchState(arg0) {
  if (null != arg0) {
    return obj[arg0];
  }
};
prototype["getApplicationFetchStates"] = function getApplicationFetchStates() {
  return obj;
};
prototype["isInvalidApplication"] = function isInvalidApplication(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
prototype["getInvalidApplicationIds"] = function getInvalidApplicationIds() {
  return set;
};
prototype["isFetching"] = function isFetching(arg0) {
  return this.getApplicationFetchState(arg0) === obj.FETCHING;
};
prototype["getApplicationLastFetchTime"] = function getApplicationLastFetchTime(arg0) {
  if (null != arg0) {
    return obj[arg0];
  }
};
ApplicationDirectoryApplicationsStore.displayName = "ApplicationDirectoryApplicationsStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_APPLICATION: function handleFetchAppDirectoryApplication(applicationId) {
    obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function handleFetchAppDirectoryAppSuccess(application) {
    application = application.application;
    obj = {};
    const merged = Object.assign(obj);
    obj[application.id] = application;
    obj = {};
    const merged1 = Object.assign(obj);
    obj[application.id] = obj.FETCHED;
    obj = {};
    const timestamp = Date.now();
    const merged2 = Object.assign(obj);
    obj[application.id] = timestamp;
    if (set.has(application.id)) {
      set.delete(application.id);
      const _Set = Set;
      set = new Set(set);
    }
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function handleFetchAppDirectoryAppFailure(applicationId) {
    applicationId = applicationId.applicationId;
    obj = {};
    const merged = Object.assign(obj);
    obj[applicationId] = obj.ERROR;
    if (applicationId.isInvalidApplication) {
      set.add(applicationId);
      const _Set = Set;
      set = new Set(set);
    }
  }
};
const applicationDirectoryApplicationsStore = new ApplicationDirectoryApplicationsStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx");

export default applicationDirectoryApplicationsStore;
export const FetchState = obj;