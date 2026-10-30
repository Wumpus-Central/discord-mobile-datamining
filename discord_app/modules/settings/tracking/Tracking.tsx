// === Module 16541: settings/tracking/Tracking ===

// Module 16541 (settings/tracking/Tracking)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 7160 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export function trackSettingSearchInputFocused() {
  AnalyticsUtilsDefault.track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
}
export function trackSettingSearchResultPress(setting) {
  const obj2 = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: null };
  const obj = AnalyticsUtilsDefault;
  obj2.search_session_id = SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId();
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj2);
}