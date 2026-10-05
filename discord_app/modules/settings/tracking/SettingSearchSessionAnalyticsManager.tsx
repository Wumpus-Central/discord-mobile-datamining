// discord_app/modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx
import v1 from "../../../../_runtime/01266_v1.js";
import Tracking from "Tracking.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class SettingSearchSessionAnalyticsManager {
  constructor() {
    return Object.assign({ searchSessionId: null, searchSessionStartTime: null, isQueryEnteredTracked: false });
  }
  getSearchSessionId() {
    return this.searchSessionId;
  }
  isSessionActive() {
    return null != this.searchSessionId;
  }
  initialize() {
    const obj = v1;
    this.searchSessionId = obj.v4();
    this.searchSessionStartTime = Date.now();
    this.isQueryEnteredTracked = false;
  }
  maybeTrackQueryEntered() {
    if (!this.isQueryEnteredTracked) {
      const obj = Tracking;
      const result = obj.trackSettingSearchQueryEntered();
      tmp.isQueryEnteredTracked = true;
    }
  }
  terminate() {
    const self = this;
    const tmp = null != this.searchSessionId && null != self.searchSessionStartTime;
    if (tmp) {
      const _Date = Date;
      const obj = { searchSessionDuration: Date.now() - self.searchSessionStartTime };
      const trackSettingSearchClosed = Tracking.trackSettingSearchClosed;
      Tracking;
      const result = trackSettingSearchClosed(obj);
      self.searchSessionId = null;
      self.searchSessionStartTime = null;
      self.isQueryEnteredTracked = false;
    }
  }
}
const prototype = SettingSearchSessionAnalyticsManager.prototype;
const prototype2 = SettingSearchSessionAnalyticsManager.prototype;
let result = size.fileFinishedImporting("modules/settings/tracking/SettingSearchSessionAnalyticsManager.tsx");

export default Object.assign({ searchSessionId: null, searchSessionStartTime: null, isQueryEnteredTracked: false });
