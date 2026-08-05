import { SearchAppsRequestSource } from "../../../../discord_common/js/shared/shared-constants/SearchAppsRequestSource.tsx";
// discord_app/modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx
import { Store } from "initialize";

const require = arg1;
let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let c3 = new require("priv")({ max: 20 });
let closure_4 = {};
class ApplicationDirectorySearchStore extends Store {
}
const prototype = ApplicationDirectorySearchStore.prototype;
prototype["getSearchResults"] = function getSearchResults(arg0) {
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
    source = SearchAppsRequestSource /* SearchAppsRequestSource */.SearchAppsRequestSource.APP_DIRECTORY;
    const tmp2 = dependencyMap;
  }
  return tmp2.get("query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source);
};
prototype["getFetchState"] = function getFetchState(arg0) {
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
    source = SearchAppsRequestSource /* SearchAppsRequestSource */.SearchAppsRequestSource.APP_DIRECTORY;
  }
  return table["query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source];
};
ApplicationDirectorySearchStore.displayName = "ApplicationDirectorySearchStore";
obj = {
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
      source = SearchAppsRequestSource /* SearchAppsRequestSource */.SearchAppsRequestSource.APP_DIRECTORY;
    }
    const obj = {};
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
      source = SearchAppsRequestSource /* SearchAppsRequestSource */.SearchAppsRequestSource.APP_DIRECTORY;
      const tmp2 = dependencyMap;
    }
    const combined = "query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source;
    let obj = { lastFetchTimeMs: Date.now() };
    const merged = Object.assign(result);
    result = tmp2.set(combined, obj);
    obj = {};
    const merged1 = Object.assign(obj);
    obj[combined] = obj.FETCHED;
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
      source = SearchAppsRequestSource /* SearchAppsRequestSource */.SearchAppsRequestSource.APP_DIRECTORY;
    }
    const obj = {};
    const combined = "query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source;
    const merged = Object.assign(obj);
    obj[combined] = obj.ERROR;
  }
};
const applicationDirectorySearchStore = new ApplicationDirectorySearchStore(require("dispatcher"), obj);
let tmp2 = new require("priv")({ max: 20 });
const result = require("initialize").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx");

export default applicationDirectorySearchStore;
export const FetchState = obj;