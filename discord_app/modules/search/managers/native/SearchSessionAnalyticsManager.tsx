import { SearchTokenTypes } from "../../SearchUtils.tsx";
// discord_app/modules/search/managers/native/SearchSessionAnalyticsManager.tsx
import { SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB as closure_2 } from "SearchEntrypointAnalyticsLocations";
import "getSession";

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
  const result = locations.set(SearchTokenTypes /* SearchTokenTypes */.getSearchContextId(searchContext), arg1);
};
prototype["_terminate"] = function _terminate(searchContext) {
  const searchContextId = SearchTokenTypes /* SearchTokenTypes */.getSearchContextId(searchContext);
  const locations = this.locations;
  locations.delete(searchContextId);
  const selectedTabs = this.selectedTabs;
  selectedTabs.delete(searchContextId);
};
prototype["_transferSession"] = function _transferSession(arg0, searchContext) {

};
prototype["getLocation"] = function getLocation(searchContext) {
  const locations = this.locations;
  return locations.get(SearchTokenTypes /* SearchTokenTypes */.getSearchContextId(searchContext));
};
prototype["getSelectedTab"] = function getSelectedTab(searchContext) {
  const selectedTabs = this.selectedTabs;
  return selectedTabs.get(SearchTokenTypes /* SearchTokenTypes */.getSearchContextId(searchContext));
};
prototype["setSelectedTab"] = function setSelectedTab(visibleTabs, arg1) {
  const selectedTabs = this.selectedTabs;
  const result = selectedTabs.set(SearchTokenTypes /* SearchTokenTypes */.getSearchContextId(visibleTabs), table[arg1]);
};
const searchSessionAnalyticsManager = new SearchSessionAnalyticsManager();
let result = require("SearchTokenTypes").fileFinishedImporting("modules/search/managers/native/SearchSessionAnalyticsManager.tsx");

export default searchSessionAnalyticsManager;