import createExecutable from "createExecutable";
import { Store } from "initialize";
import set from "dispatcher";

let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let closure_2 = {};
let closure_3 = {};
let set = new Set();
let closure_5 = {};
class ApplicationDirectoryApplicationsStore extends Store {
}
const prototype = ApplicationDirectoryApplicationsStore.prototype;
prototype["getApplication"] = function getApplication(arg0) {
  if (null != arg0) {
    return dependencyMap[arg0];
  }
};
prototype["getApplicationRecord"] = function getApplicationRecord(arg0) {
  if (null != arg0) {
    if (null != dependencyMap[arg0]) {
      return createExecutable.createFromServer(tmp2);
    }
  }
};
prototype["getApplications"] = function getApplications() {
  return closure_2;
};
prototype["getApplicationFetchState"] = function getApplicationFetchState(createExecutable) {
  if (null != createExecutable) {
    return table[createExecutable];
  }
};
prototype["getApplicationFetchStates"] = function getApplicationFetchStates() {
  return closure_3;
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
prototype["isFetching"] = function isFetching(createExecutable) {
  return this.getApplicationFetchState(createExecutable) === obj.FETCHING;
};
prototype["getApplicationLastFetchTime"] = function getApplicationLastFetchTime(createExecutable) {
  if (null != createExecutable) {
    return table2[createExecutable];
  }
};
ApplicationDirectoryApplicationsStore.displayName = "ApplicationDirectoryApplicationsStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_APPLICATION: function handleFetchAppDirectoryApplication(applicationId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId.applicationId] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function handleFetchAppDirectoryAppSuccess(application) {
    application = application.application;
    let obj = {};
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
    const obj = {};
    const merged = Object.assign(obj);
    obj[applicationId] = obj.ERROR;
    if (applicationId.isInvalidApplication) {
      set.add(applicationId);
      const _Set = Set;
      set = new Set(set);
    }
  }
};
const applicationDirectoryApplicationsStore = new ApplicationDirectoryApplicationsStore(require("dispatcher"), obj);
const result = set.fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx");

export default applicationDirectoryApplicationsStore;
export const FetchState = obj;