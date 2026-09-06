// discord_app/modules/settings/tracking/Tracking.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import SettingSearchSessionAnalyticsManagerDefault from "SettingSearchSessionAnalyticsManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  AnalyticsUtilsDefault.track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  const obj = {
    setting: setting.setting,
    title: setting.title,
    route: setting.route,
    search_result_position: setting.searchResultPosition,
    num_search_results: setting.numSearchResults,
    search_session_id: SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId(),
  };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
};
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  const obj = { search_session_id: SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  const obj = {
    search_session_id: SettingSearchSessionAnalyticsManagerDefault.getSearchSessionId(),
    search_session_duration_ms: searchSessionDuration.searchSessionDuration,
  };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj);
};
