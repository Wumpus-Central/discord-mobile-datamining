// === Module 11928: _initialize ===

// Module 11928 (_initialize)
import set from "set" /* 2 */;
import SearchEntrypointAnalyticsLocations from "SearchEntrypointAnalyticsLocations" /* 7621 */;
import SearchTokenTypes from "SearchTokenTypes" /* 11907 */;
import getSessionDefault from "getSession" /* 11929 */;

let closure_2 = SearchEntrypointAnalyticsLocations.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
getSessionDefault;
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
prototype["_initialize"] = function _initialize(searchContext) {
  const locations = this.locations;
  const result = locations.set(SearchTokenTypes.getSearchContextId(searchContext), arg1);
};
prototype["_terminate"] = function _terminate(searchContext) {
  const searchContextId = SearchTokenTypes.getSearchContextId(searchContext);
  const locations = this.locations;
  locations.delete(searchContextId);
  const selectedTabs = this.selectedTabs;
  selectedTabs.delete(searchContextId);
};
prototype["_transferSession"] = function _transferSession(arg0, searchContext) {

};
prototype["getLocation"] = function getLocation(searchContext) {
  const locations = this.locations;
  return locations.get(SearchTokenTypes.getSearchContextId(searchContext));
};
prototype["getSelectedTab"] = function getSelectedTab(searchContext) {
  const selectedTabs = this.selectedTabs;
  return selectedTabs.get(SearchTokenTypes.getSearchContextId(searchContext));
};
prototype["setSelectedTab"] = function setSelectedTab(visibleTabs, arg1) {
  const selectedTabs = this.selectedTabs;
  const result = selectedTabs.set(SearchTokenTypes.getSearchContextId(visibleTabs), table[arg1]);
};
const searchSessionAnalyticsManager = new SearchSessionAnalyticsManager();
let result = set.fileFinishedImporting("modules/search/managers/native/SearchSessionAnalyticsManager.tsx");

export default searchSessionAnalyticsManager;