// === Module 6253: getSearchSessionId ===

// Module 6253 (getSearchSessionId)
import set from "set" /* 2 */;
import v1 from "v1" /* 511 */;
import trackSettingSearchInputFocused from "trackSettingSearchInputFocused" /* 6254 */;

class SettingSearchSessionAnalyticsManager {
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
  if (!this.isQueryEnteredTracked) {
    const result = trackSettingSearchInputFocused.trackSettingSearchQueryEntered();
    tmp.isQueryEnteredTracked = true;
    const obj = trackSettingSearchInputFocused;
  }
};
prototype["terminate"] = function terminate() {
  const self = this;
  if (tmp) {
    let obj = trackSettingSearchInputFocused;
    obj = { searchSessionDuration: null };
    const _Date = Date;
    obj[0] = Date.now() - self.searchSessionStartTime;
    const result = obj.trackSettingSearchClosed(obj);
    self.searchSessionId = null;
    self.searchSessionStartTime = null;
    self.isQueryEnteredTracked = false;
  }
};
let result = set.fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default Object.create(SettingSearchSessionAnalyticsManager.prototype);