// discord_app/modules/search/managers/native/SearchSessionAnalyticsManager.tsx
import TrackingConstants from "../../native/tracking/TrackingConstants.tsx";
import SearchUtils from "../../SearchUtils.tsx";
import AbstractSearchSessionAnalyticsManager from "../AbstractSearchSessionAnalyticsManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_2 = TrackingConstants.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
class SearchSessionAnalyticsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    applyArgumentsResult.locations = map;
    map1 = new Map();
    applyArgumentsResult.selectedTabs = map1;
    return applyArgumentsResult;
  }
}
const prototype = SearchSessionAnalyticsManager.prototype;
prototype["_initialize"] = function _initialize(searchContext, arg1) {
  const locations = this.locations;
  const result = locations.set(SearchUtils.getSearchContextId(searchContext), arg1);
};
prototype["_terminate"] = function _terminate(searchContext) {
  const searchContextId = SearchUtils.getSearchContextId(searchContext);
  const locations = this.locations;
  locations.delete(searchContextId);
  const selectedTabs = this.selectedTabs;
  selectedTabs.delete(searchContextId);
};
prototype["_transferSession"] = function _transferSession() {};
prototype["getLocation"] = function getLocation(searchContext) {
  const locations = this.locations;
  return locations.get(SearchUtils.getSearchContextId(searchContext));
};
prototype["getSelectedTab"] = function getSelectedTab(searchContext) {
  const selectedTabs = this.selectedTabs;
  return selectedTabs.get(SearchUtils.getSearchContextId(searchContext));
};
prototype["setSelectedTab"] = function setSelectedTab(searchContext, arg1) {
  const selectedTabs = this.selectedTabs;
  const result = selectedTabs.set(SearchUtils.getSearchContextId(searchContext), closure_2[arg1]);
};
const searchSessionAnalyticsManager = new SearchSessionAnalyticsManager();
let result = size.fileFinishedImporting("modules/search/managers/native/SearchSessionAnalyticsManager.tsx");

export default searchSessionAnalyticsManager;
