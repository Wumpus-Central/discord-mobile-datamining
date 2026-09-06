// discord_app/modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx
import v1 from "../../../../_runtime/01256_v1.js";
import Tracking from "Tracking.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  if (!this.isQueryEnteredTracked) {
    const result = Tracking.trackSettingSearchQueryEntered();
    tmp.isQueryEnteredTracked = true;
  }
};
prototype["terminate"] = function terminate() {
  const self = this;
  if (tmp) {
    const obj = { searchSessionDuration: null };
    const _Date = Date;
    obj.searchSessionDuration = Date.now() - self.searchSessionStartTime;
    const result = obj.trackSettingSearchClosed(obj);
    self.searchSessionId = null;
    self.searchSessionStartTime = null;
    self.isQueryEnteredTracked = false;
  }
  tmp = null != this.searchSessionId && null != self.searchSessionStartTime;
};
let result = size.fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default Object.assign({ searchSessionId: null, searchSessionStartTime: null, isQueryEnteredTracked: false });
