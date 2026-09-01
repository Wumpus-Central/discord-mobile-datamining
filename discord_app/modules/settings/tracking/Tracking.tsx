// discord_app/modules/settings/tracking/Tracking.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import getSearchSessionIdDefault from "SettingSearchSessionAnalyticsManager.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/settings/tracking/Tracking.tsx");

export const trackSettingSearchInputFocused = function trackSettingSearchInputFocused() {
  expandEventPropertiesDefault.track(AnalyticEvents.USER_SETTINGS_SEARCH_PRESS);
};
export const trackSettingSearchResultPress = function trackSettingSearchResultPress(setting) {
  let obj = expandEventPropertiesDefault;
  obj = {
    setting: setting.setting,
    title: setting.title,
    route: setting.route,
    search_result_position: setting.searchResultPosition,
    num_search_results: setting.numSearchResults,
    search_session_id: getSearchSessionIdDefault.getSearchSessionId(),
  };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_RESULT_PRESS, obj);
};
export const trackSettingSearchQueryEntered = function trackSettingSearchQueryEntered() {
  let obj = expandEventPropertiesDefault;
  obj = { search_session_id: getSearchSessionIdDefault.getSearchSessionId() };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, obj);
};
export const trackSettingSearchClosed = function trackSettingSearchClosed(searchSessionDuration) {
  let obj = expandEventPropertiesDefault;
  obj = {
    search_session_id: getSearchSessionIdDefault.getSearchSessionId(),
    search_session_duration_ms: searchSessionDuration.searchSessionDuration,
  };
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, obj);
};
