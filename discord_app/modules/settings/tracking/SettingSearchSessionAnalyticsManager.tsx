// discord_app/modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import v1 from "../../../../_runtime/00514_v1.js";
import trackSettingSearchInputFocused from "Tracking.tsx";

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
  }
};
prototype["terminate"] = function terminate() {
  const self = this;
  if (tmp) {
    const obj = { searchSessionDuration: null };
    const _Date = Date;
    obj[0] = Date.now() - self.searchSessionStartTime;
    const result = obj.trackSettingSearchClosed(obj);
    self.searchSessionId = null;
    self.searchSessionStartTime = null;
    self.isQueryEnteredTracked = false;
  }
  tmp = null != this.searchSessionId && null != self.searchSessionStartTime;
};
let result = obj132.fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default Object.create(SettingSearchSessionAnalyticsManager.prototype);