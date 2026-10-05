// discord_app/modules/search/managers/native/SearchSessionAnalyticsManager.tsx
import TrackingConstants from "../../native/tracking/TrackingConstants.tsx";
import SearchUtils from "../../SearchUtils.tsx";
import AbstractSearchSessionAnalyticsManager from "../AbstractSearchSessionAnalyticsManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const React2 = TrackingConstants.SEARCH_TAB_TO_ANALYTICS_SEARCH_TAB;
class SearchSessionAnalyticsManager extends AbstractSearchSessionAnalyticsManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.locations = new Map();
    new Map();
    applyArgumentsResult.selectedTabs = new Map();
    new Map();
    return applyArgumentsResult;
  }
  _initialize(searchContext, arg1) {
    const locations = this.locations;
    const obj = SearchUtils;
    const result = locations.set(obj.getSearchContextId(searchContext), arg1);
  }
  _terminate(searchContext) {
    const obj = SearchUtils;
    const searchContextId = obj.getSearchContextId(searchContext);
    const locations = this.locations;
    locations.delete(searchContextId);
    const selectedTabs = this.selectedTabs;
    selectedTabs.delete(searchContextId);
  }
  _transferSession() {}
  getLocation(searchContext) {
    const locations = this.locations;
    const obj = SearchUtils;
    return locations.get(obj.getSearchContextId(searchContext));
  }
  getSelectedTab(searchContext) {
    const selectedTabs = this.selectedTabs;
    const obj = SearchUtils;
    return selectedTabs.get(obj.getSearchContextId(searchContext));
  }
  setSelectedTab(searchContext, arg1) {
    const selectedTabs = this.selectedTabs;
    const obj = SearchUtils;
    const result = selectedTabs.set(obj.getSearchContextId(searchContext), closure_2[arg1]);
  }
}
const prototype = SearchSessionAnalyticsManager.prototype;
const searchSessionAnalyticsManager = new SearchSessionAnalyticsManager();
let result = size.fileFinishedImporting("modules/search/managers/native/SearchSessionAnalyticsManager.tsx");

export default searchSessionAnalyticsManager;
