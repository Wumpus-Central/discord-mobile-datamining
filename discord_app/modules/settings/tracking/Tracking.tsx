// === Module 6124: trackSettingSearchInputFocused ===

// Module 6124 (trackSettingSearchInputFocused)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSearchSessionIdDefault from "getSearchSessionId" /* 6123 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  expandEventPropertiesDefault.track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  let obj = expandEventPropertiesDefault;
  obj = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: getSearchSessionIdDefault.getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
};
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  let obj = expandEventPropertiesDefault;
  obj = { search_session_id: getSearchSessionIdDefault.getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  let obj = expandEventPropertiesDefault;
  obj = { search_session_id: getSearchSessionIdDefault.getSearchSessionId(), search_session_duration_ms: searchSessionDuration.searchSessionDuration };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj);
};