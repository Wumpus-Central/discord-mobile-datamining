// === Module 14971: QuestHomeRoundtripTracker ===

// Module 14971 (QuestHomeRoundtripTracker)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5409 */;
import MetricEvents from "MetricEvents" /* 5414 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10015 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let c4 = 30000;
class QuestHomeRoundtripTracker {
  constructor() {
    return Object.assign({ startTime: null, timeoutTimer: null });
  }
  clearTimeoutTimer() {
    const self = this;
    if (null != this.timeoutTimer) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.timeoutTimer);
      self.timeoutTimer = null;
    }
  }
  sendMetric(timeout, duration, arg2) {
    let items;
    const obj = AnalyticsUtilsDefault;
    const obj2 = { timeout, duration };
    obj.track(AnalyticEvents.QUEST_HOME_ROUNDTRIP, obj2);
    if (Math.random() <= 0.1) {
      const obj3 = { name: MetricEvents.MetricEvents.QUEST_HOME_ROUNDTRIP, tags: items };
      const distribution = MonitoringAgentDefault.distribution;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items = ["includes_bounties:" + arg2, ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "timeout:" + timeout;
      distribution(obj3, duration);
    }
  }
  startTracking() {
    const self = this;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.includesBounties;
    if (flag === undefined) {
      flag = false;
    }
    self.clearTracking();
    self.startTime = performance.now();
    self.timeoutTimer = setTimeout(() => {
      const obj = { includesBounties: flag, timeout: true };
      self.stopTracking(obj);
    }, c4);
  }
  stopTracking() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let flag = obj.includesBounties;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = obj.timeout;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const self = this;
    if (null != this.startTime) {
      const obj2 = DiscordAppStateDefault;
      if ("active" === obj2.getState()) {
        let rounded;
        if (flag2) {
          rounded = c4;
        } else {
          const _Math = Math;
          const _performance = performance;
          rounded = Math.round(performance.now() - self.startTime);
        }
        const _Math2 = Math;
        self.sendMetric(flag2, Math.min(rounded, c4), flag);
      }
      self.clearTracking();
    }
  }
  clearTracking() {
    this.clearTimeoutTimer();
    this.startTime = null;
  }
}
const prototype = QuestHomeRoundtripTracker.prototype;
const prototype2 = QuestHomeRoundtripTracker.prototype;
const result = size.fileFinishedImporting("modules/quests/QuestHomeRoundtripTracker.tsx");

export default Object.assign({ startTime: null, timeoutTimer: null });