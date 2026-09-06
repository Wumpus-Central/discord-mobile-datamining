// discord_app/modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import privDefault from "../../../../_runtime/01437_priv.js";

let obj = {
  NOT_FETCHED: 0,
  [0]: "NOT_FETCHED",
  FETCHING: 1,
  [1]: "FETCHING",
  FETCHED: 2,
  [2]: "FETCHED",
  ERROR: 3,
  [3]: "ERROR",
};
let closure_1 = new privDefault({ max: 20 });
obj = {};
const Store = initializeDefault.Store;
class ApplicationDirectorySimilarApplicationsStore extends Store {}
const prototype = ApplicationDirectorySimilarApplicationsStore.prototype;
prototype["getSimilarApplications"] = function getSimilarApplications(arg0) {
  ({ applicationId, guildId, page } = arg0);
  if (null != applicationId) {
    const _HermesInternal = HermesInternal;
    return closure_1.get("applicationId:" + applicationId + " guildId:" + guildId + " page:" + page);
  }
};
prototype["getFetchState"] = function getFetchState(arg0) {
  ({ applicationId, guildId, page } = arg0);
  if (null != applicationId) {
    const _HermesInternal = HermesInternal;
    return obj["applicationId:" + applicationId + " guildId:" + guildId + " page:" + page];
  }
};
ApplicationDirectorySimilarApplicationsStore.displayName = "ApplicationDirectorySimilarApplicationsStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function handleFetchSimilarApplications(applicationId) {
    obj = {};
    const combined =
      "applicationId:" +
      applicationId.applicationId +
      " guildId:" +
      applicationId.guildId +
      " page:" +
      applicationId.page;
    const merged = Object.assign(obj);
    obj[combined] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function handleFetchSimilarApplicationsSuccess(page) {
    page = page.page;
    ({ similarApplications, loadId, totalPages } = page);
    const combined = "applicationId:" + page.applicationId + " guildId:" + page.guildId + " page:" + page;
    obj = { lastFetchTimeMs: Date.now(), applications: similarApplications, loadId, page, totalPages };
    const result = closure_1.set(combined, obj);
    obj = {};
    const merged = Object.assign(obj);
    obj[combined] = obj.FETCHED;
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function handleFetchSimilarApplicationsFailure(
    applicationId,
  ) {
    obj = {};
    const combined =
      "applicationId:" +
      applicationId.applicationId +
      " guildId:" +
      applicationId.guildId +
      " page:" +
      applicationId.page;
    const merged = Object.assign(obj);
    obj[combined] = obj.ERROR;
  },
};
const applicationDirectorySimilarApplicationsStore = new ApplicationDirectorySimilarApplicationsStore(
  DispatcherDefault,
  obj,
);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx",
);

export default applicationDirectorySimilarApplicationsStore;
export const FetchState = obj;
