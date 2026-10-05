// discord_app/modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
obj = {};
obj = {};
let set = new Set();
let obj3 = {};
const Store = get_initializedDefault.Store;
class ApplicationDirectoryApplicationsStore extends Store {
  getApplication(arg0) {
    if (null != arg0) {
      return obj[arg0];
    }
  }
  getApplicationRecord(arg0) {
    if (null != arg0) {
      if (null != obj[arg0]) {
        return ApplicationRecord.createFromServer(obj[arg0]);
      }
    }
  }
  getApplications() {
    return obj;
  }
  getApplicationFetchState(applicationId) {
    if (null != applicationId) {
      return obj[applicationId];
    }
  }
  getApplicationFetchStates() {
    return obj;
  }
  isInvalidApplication(applicationId) {
    const hasItem = null != applicationId && set.has(applicationId);
    return hasItem;
  }
  getInvalidApplicationIds() {
    return set;
  }
  isFetching(applicationId) {
    return this.getApplicationFetchState(applicationId) === obj.FETCHING;
  }
  getApplicationLastFetchTime(applicationId) {
    if (null != applicationId) {
      return obj3[applicationId];
    }
  }
}
const prototype = ApplicationDirectoryApplicationsStore.prototype;
ApplicationDirectoryApplicationsStore.displayName = "ApplicationDirectoryApplicationsStore";
let obj2 = {
  APPLICATION_DIRECTORY_FETCH_APPLICATION: function handleFetchAppDirectoryApplication(applicationId) {
    obj = {};
    applicationId = applicationId.applicationId;
    const merged = Object.assign(obj);
    obj[applicationId] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function handleFetchAppDirectoryAppSuccess(application) {
    application = application.application;
    obj = {};
    const merged = Object.assign(obj);
    obj[application.id] = application;
    const obj2 = {};
    const merged1 = Object.assign(obj);
    obj2[application.id] = obj.FETCHED;
    obj = obj2;
    obj3 = {};
    const timestamp = Date.now();
    const merged2 = Object.assign(obj3);
    obj3[application.id] = timestamp;
    if (set.has(application.id)) {
      set.delete(application.id);
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
    }
  },
  APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function handleFetchAppDirectoryAppFailure(applicationId) {
    applicationId = applicationId.applicationId;
    obj = {};
    const isInvalidApplication = applicationId.isInvalidApplication;
    const merged = Object.assign(obj);
    obj[applicationId] = obj.ERROR;
    if (isInvalidApplication) {
      set.add(applicationId);
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set);
    }
  },
};
const applicationDirectoryApplicationsStore = new ApplicationDirectoryApplicationsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting(
  "modules/global_discovery_apps/stores/ApplicationDirectoryApplicationsStore.tsx",
);

export default applicationDirectoryApplicationsStore;
export const FetchState = obj;
