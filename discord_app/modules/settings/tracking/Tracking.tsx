// discord_app/modules/settings/tracking/Tracking.tsx
import { AnalyticEvents } from "ME";

const result = require("getSearchSessionId").fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  require("../../../utils/AnalyticsUtils.tsx").track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj = { setting: setting.setting, title: setting.title, route: setting.route, search_result_position: setting.searchResultPosition, num_search_results: setting.numSearchResults, search_session_id: null };
  obj[5] = require("SettingSearchSessionAnalyticsManager.tsx").getSearchSessionId();
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
};
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj = { search_session_id: null };
  obj[0] = require("SettingSearchSessionAnalyticsManager.tsx").getSearchSessionId();
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  let obj = require("../../../utils/AnalyticsUtils.tsx");
  obj = { search_session_id: null, search_session_duration_ms: null };
  obj[0] = require("SettingSearchSessionAnalyticsManager.tsx").getSearchSessionId();
  obj[1] = searchSessionDuration.searchSessionDuration;
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj);
};