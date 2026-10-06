// === Module 11702: ApplicationDirectorySimilarApplicationsStore ===

// Module 11702 (ApplicationDirectorySimilarApplicationsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import size from "module_2" /* 2 */;

let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
obj = {};
new LRUCacheDefault({ max: 20 });
const Store = get_initializedDefault.Store;
class ApplicationDirectorySimilarApplicationsStore extends Store {
  getSimilarApplications(arg0) {
    let applicationId;
    let guildId;
    let page;
    ({ applicationId, guildId, page } = arg0);
    if (null != applicationId) {
      const _HermesInternal = HermesInternal;
      return closure_1.get("applicationId:" + applicationId + " guildId:" + guildId + " page:" + page);
    }
  }
  getFetchState(arg0) {
    let applicationId;
    let guildId;
    let page;
    ({ applicationId, guildId, page } = arg0);
    if (null != applicationId) {
      const _HermesInternal = HermesInternal;
      return obj["applicationId:" + applicationId + " guildId:" + guildId + " page:" + page];
    }
  }
}
const prototype = ApplicationDirectorySimilarApplicationsStore.prototype;
ApplicationDirectorySimilarApplicationsStore.displayName = "ApplicationDirectorySimilarApplicationsStore";
let obj2 = {
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function handleFetchSimilarApplications(applicationId) {
    obj = {};
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
    obj = { lastFetchTimeMs: Date.now(), applications: similarApplications, loadId, page, totalPages };
    const result = closure_1.set(combined, obj);
    const obj2 = {};
    const merged = Object.assign(obj);
    obj2[combined] = obj.FETCHED;
    obj = obj2;
  },
  APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function handleFetchSimilarApplicationsFailure(applicationId) {
    obj = {};
    const combined = "applicationId:" + applicationId.applicationId + " guildId:" + applicationId.guildId + " page:" + applicationId.page;
    const merged = Object.assign(obj);
    obj[combined] = obj.ERROR;
  }
};
const applicationDirectorySimilarApplicationsStore = new ApplicationDirectorySimilarApplicationsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectorySimilarApplicationsStore.tsx");

export default applicationDirectorySimilarApplicationsStore;
export const FetchState = obj;