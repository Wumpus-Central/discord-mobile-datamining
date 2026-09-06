// === Module 6997: Tracking ===

// Module 6997 (Tracking)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager" /* 6996 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  AnalyticsUtilsDefault.track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  const obj = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
};
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  const obj = { search_session_id: SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  const obj = { search_session_id: SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId(), search_session_duration_ms: searchSessionDuration.searchSessionDuration };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj);
};