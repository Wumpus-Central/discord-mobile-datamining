// discord_app/modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import privDefault from "../../../../_runtime/01405_priv.js";
import SearchAppsRequestSource from "../../../../discord_common/js/shared/shared-constants/SearchAppsRequestSource.tsx";

require = fn;
let obj = { FETCHING: 0, [0]: "FETCHING", FETCHED: 1, [1]: "FETCHED", ERROR: 2, [2]: "ERROR" };
let closure_3 = new privDefault({ max: 20 });
let closure_4 = {};
const Store = initializeDefault.Store;
class ApplicationDirectorySearchStore extends Store {
}
const prototype = ApplicationDirectorySearchStore.prototype;
prototype["getSearchResults"] = function getSearchResults(arg0) {
  ({ query, guildId, page, pageSize, categoryId, integrationType, minUserInstallCommandCount, excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source } = arg0);
  if (source === undefined) {
    source = SearchAppsRequestSource.SearchAppsRequestSource.APP_DIRECTORY;
  }
  return store.get("query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source);
};
prototype["getFetchState"] = function getFetchState(arg0) {
  ({ query, guildId, page, pageSize, categoryId, integrationType, minUserInstallCommandCount, excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source } = arg0);
  if (source === undefined) {
    source = SearchAppsRequestSource.SearchAppsRequestSource.APP_DIRECTORY;
  }
  return table["query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source];
};
ApplicationDirectorySearchStore.displayName = "ApplicationDirectorySearchStore";
obj = {
  APPLICATION_DIRECTORY_FETCH_SEARCH: function handleSearchFetch(arg0) {
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
    ({ query, guildId, page, pageSize, categoryId, result, integrationType, minUserInstallCommandCount, excludeAppsWithCustomInstallUrl, excludeNonEmbeddedApps, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand, source } = arg0);
    if (source === undefined) {
      source = SearchAppsRequestSource.SearchAppsRequestSource.APP_DIRECTORY;
    }
    const combined = "query:'" + query + "' guildId:" + guildId + " page:" + page + " pageSize:" + pageSize + " categoryId:" + categoryId + " integrationType:" + integrationType + " minUserInstallCommandCount:" + minUserInstallCommandCount + " excludeAppsWithCustomInstallUrl:" + excludeAppsWithCustomInstallUrl + " excludeNonEmbeddedApps:" + excludeNonEmbeddedApps + " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:" + excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand + " source:" + source;
    obj = { lastFetchTimeMs: Date.now() };
    const merged = Object.assign(result);
    result = store.set(combined, obj);
    obj = {};
    const merged1 = Object.assign(obj);
    obj[combined] = obj.FETCHED;
  },
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function handleSearchFetchFailure(arg0) {
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
const applicationDirectorySearchStore = new ApplicationDirectorySearchStore(dispatcherDefault, obj);
const tmp2 = new privDefault({ max: 20 });
const result = require("obj132").fileFinishedImporting("modules/global_discovery_apps/stores/ApplicationDirectorySearchStore.tsx");

export default applicationDirectorySearchStore;
export const FetchState = obj;