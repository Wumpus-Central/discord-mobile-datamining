// === Module 11682: ApplicationDirectorySearchStore ===

// Module 11682 (ApplicationDirectorySearchStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import SearchAppsRequestSource from "SearchAppsRequestSource" /* 11683 */;
import size from "module_2" /* 2 */;

let set;

let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
const _false = new LRUCacheDefault({ max: 20 });
obj = {};
new LRUCacheDefault({ max: 20 });
const Store = get_initializedDefault.Store;
class ApplicationDirectorySearchStore extends Store {
  getSearchResults(arg0) {
    let categoryId;
    let excludeAppsWithCustomInstallUrl;
    let excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
    let excludeNonEmbeddedApps;
    let guildId;
    let integrationType;
    let minUserInstallCommandCount;
    let page;
    let pageSize;
    let query;
    let source;
    ({ query, guildId, page, pageSize, categoryId, integrationType, minUserInstallCommandCount, excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source } = arg0);
    if (source === undefined) {
      source = SearchAppsRequestSource.SearchAppsRequestSource.APP_DIRECTORY;
    }
    return closure_3.get("query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source);
  }
  getFetchState(arg0) {
    let categoryId;
    let excludeAppsWithCustomInstallUrl;
    let excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
    let excludeNonEmbeddedApps;
    let guildId;
    let integrationType;
    let minUserInstallCommandCount;
    let page;
    let pageSize;
    let query;
    let source;
    ({ query, guildId, page, pageSize, categoryId, integrationType, minUserInstallCommandCount, excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source } = arg0);
    if (source === undefined) {
      source = SearchAppsRequestSource.SearchAppsRequestSource.APP_DIRECTORY;
    }
    return obj["query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source];
  }
}
const prototype = ApplicationDirectorySearchStore.prototype;
ApplicationDirectorySearchStore.displayName = "ApplicationDirectorySearchStore";
let obj2 = {
  APPLICATION_DIRECTORY_FETCH_SEARCH: function handleSearchFetch(arg0) {
    let categoryId;
    let excludeAppsWithCustomInstallUrl;
    let excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
    let excludeNonEmbeddedApps;
    let guildId;
    let integrationType;
    let minUserInstallCommandCount;
    let page;
    let pageSize;
    let query;
    let source;
    ({ query, guildId, page, pageSize, categoryId, integrationType, minUserInstallCommandCount, excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source } = arg0);
    if (source === undefined) {
      source = SearchAppsRequestSource.SearchAppsRequestSource.APP_DIRECTORY;
    }
    obj = {};
    const combined = "query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source;
    const merged = Object.assign(obj);
    obj[combined] = obj.FETCHING;
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function handleSearchFetchSuccess(arg0) {
    let categoryId;
    let excludeAppsWithCustomInstallUrl;
    let excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
    let excludeNonEmbeddedApps;
    let guildId;
    let integrationType;
    let minUserInstallCommandCount;
    let page;
    let pageSize;
    let query;
    let result;
    let source;
    ({ query, guildId, page, pageSize, categoryId, result, integrationType, minUserInstallCommandCount, excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source } = arg0);
    if (source === undefined) {
      source = SearchAppsRequestSource.SearchAppsRequestSource.APP_DIRECTORY;
    }
    const combined = "query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source;
    obj = { lastFetchTimeMs: Date.now() };
    set = closure_3.set;
    const merged = Object.assign(result);
    const result1 = set(combined, obj);
    const obj2 = {};
    const merged1 = Object.assign(obj);
    obj2[combined] = obj.FETCHED;
    obj = obj2;
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function handleSearchFetchFailure(arg0) {
    let categoryId;
    let excludeAppsWithCustomInstallUrl;
    let excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand;
    let excludeNonEmbeddedApps;
    let guildId;
    let integrationType;
    let minUserInstallCommandCount;
    let page;
    let pageSize;
    let query;
    let source;
    ({ query, guildId, page, pageSize, categoryId, integrationType, minUserInstallCommandCount, excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source } = arg0);
    if (source === undefined) {
      source = SearchAppsRequestSource.SearchAppsRequestSource.APP_DIRECTORY;
    }
    obj = {};
    const combined = "query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source;
    const merged = Object.assign(obj);
    obj[combined] = obj.ERROR;
  }
};
const applicationDirectorySearchStore = new ApplicationDirectorySearchStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx");

export default applicationDirectorySearchStore;
export const FetchState = obj;