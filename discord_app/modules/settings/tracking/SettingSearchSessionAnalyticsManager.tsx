// === Module 6676: SettingSearchSessionAnalyticsManager ===

// Module 6676 (SettingSearchSessionAnalyticsManager)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import v1 from "v1" /* 1278 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
class SettingSearchSessionAnalyticsManager {
  constructor() {
    return Object.assign({ searchSessionId: null, searchSessionStartTime: null, isQueryEnteredTracked: false });
  }
}
const prototype = SettingSearchSessionAnalyticsManager.prototype;
prototype["getSearchSessionId"] = function getSearchSessionId() {
  return this.searchSessionId;
};
prototype["isSessionActive"] = function isSessionActive() {
  return null != this.searchSessionId;
};
prototype["initialize"] = function initialize() {
  this.searchSessionId = v1.v4();
  this.searchSessionStartTime = Date.now();
  this.isQueryEnteredTracked = false;
};
prototype["maybeTrackQueryEntered"] = function maybeTrackQueryEntered() {
  const self = this;
  if (!this.isQueryEnteredTracked) {
    self.trackQueryEntered();
    self.isQueryEnteredTracked = true;
  }
};
prototype["terminate"] = function terminate() {
  const self = this;
  if (tmp) {
    const _Date = Date;
    self.trackClosed(Date.now() - self.searchSessionStartTime);
    self.searchSessionId = null;
    self.searchSessionStartTime = null;
    self.isQueryEnteredTracked = false;
  }
};
prototype["trackQueryEntered"] = function trackQueryEntered() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_QUERY_ENTERED, { search_session_id: this.getSearchSessionId() });
};
prototype["trackClosed"] = function trackClosed(search_session_duration_ms) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.USER_SETTINGS_SEARCH_CLOSED, { search_session_id: this.getSearchSessionId(), search_session_duration_ms });
};
const result = size.fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default Object.assign({ searchSessionId: null, searchSessionStartTime: null, isQueryEnteredTracked: false });