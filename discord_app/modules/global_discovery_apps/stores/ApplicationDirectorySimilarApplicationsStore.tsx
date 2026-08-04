// discord_app/modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx
import { Store } from "initialize";

let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
let closure_1 = new require("priv")({ max: 20 });
let closure_2 = {};
class ApplicationDirectorySimilarApplicationsStore extends Store {
}
const prototype = ApplicationDirectorySimilarApplicationsStore.prototype;
prototype["getSimilarApplications"] = function getSimilarApplications(arg0) {
  let applicationId;
  let guildId;
  let page;
  ({ applicationId, guildId, page } = arg0);
  if (null != applicationId) {
    const _HermesInternal = HermesInternal;
    return applicationId.get("applicationId:" + applicationId + " guildId:" + guildId + " page:" + page);
  }
};
prototype["getFetchState"] = function getFetchState(arg0) {
  let applicationId;
  let guildId;
  let page;
  ({ applicationId, guildId, page } = arg0);
  if (null != applicationId) {
    const _HermesInternal = HermesInternal;
    return table["applicationId:" + applicationId + " guildId:" + guildId + " page:" + page];
  }
};
ApplicationDirectorySimilarApplicationsStore.displayName = "ApplicationDirectorySimilarApplicationsStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function handleFetchSimilarApplications(applicationId) {
    const obj = {};
    const combined = "applicationId:" + applicationId.applicationId + " guildId:" + applicationId.guildId + " page:" + applicationId.page;
    const merged = Object.assign(obj);
    obj[combined] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function handleFetchSimilarApplicationsSuccess(page) {
    let loadId;
    let similarApplications;
    let totalPages;
    page = page.page;
    ({ similarApplications, loadId, totalPages } = page);
    const combined = "applicationId:" + page.applicationId + " guildId:" + page.guildId + " page:" + page;
    let obj = { lastFetchTimeMs: Date.now(), applications: similarApplications, loadId, page, totalPages };
    const result = tmp2.set(combined, obj);
    obj = {};
    const merged = Object.assign(obj);
    obj[combined] = obj.FETCHED;
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function handleFetchSimilarApplicationsFailure(applicationId) {
    const obj = {};
    const combined = "applicationId:" + applicationId.applicationId + " guildId:" + applicationId.guildId + " page:" + applicationId.page;
    const merged = Object.assign(obj);
    obj[combined] = obj.ERROR;
  }
};
const applicationDirectorySimilarApplicationsStore = new ApplicationDirectorySimilarApplicationsStore(require("dispatcher"), obj);
const tmp2 = new require("priv")({ max: 20 });
let result = require("dispatcher").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx");

export default applicationDirectorySimilarApplicationsStore;
export const FetchState = obj;