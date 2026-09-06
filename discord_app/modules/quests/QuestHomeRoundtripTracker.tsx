// === Module 15169: QuestHomeRoundtripTracker ===

// Module 15169 (QuestHomeRoundtripTracker)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import DiscordAppStateDefault from "DiscordAppState" /* 11300 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let c4 = 30000;
class QuestHomeRoundtripTracker {
  constructor() {
    return Object.assign({ startTime: null, timeoutTimer: null });
  }
}
const prototype = QuestHomeRoundtripTracker.prototype;
prototype["clearTimeoutTimer"] = function clearTimeoutTimer() {
  const self = this;
  if (null != this.timeoutTimer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.timeoutTimer);
    self.timeoutTimer = null;
  }
};
prototype["sendMetric"] = function sendMetric(timeout, duration, arg2) {
  let obj = { timeout, duration };
  obj.track(AnalyticEvents.QUEST_HOME_ROUNDTRIP, obj);
  if (Math.random() <= 0.1) {
    obj = { name: MetricEvents.MetricEvents.QUEST_HOME_ROUNDTRIP, tags: null };
    const _HermesInternal = HermesInternal;
    const items = ["includes_bounties:" + arg2, ];
    const _HermesInternal2 = HermesInternal;
    items[1] = "timeout:" + timeout;
    obj.tags = items;
    MonitoringAgentDefault.distribution(obj, duration);
    const tmpResult = MonitoringAgentDefault;
  }
};
prototype["startTracking"] = function startTracking() {
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
    self.stopTracking({ includesBounties: flag, timeout: true });
  }, c4);
};
prototype["stopTracking"] = function stopTracking() {
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
    if ("active" !== obj2.getState()) {
      self.clearTracking();
    } else {
      if (flag2) {
        let rounded = c4;
      } else {
        const _Math = Math;
        const _performance = performance;
        rounded = Math.round(performance.now() - self.startTime);
      }
      const _Math2 = Math;
      self.sendMetric(flag2, Math.min(rounded, c4), flag);
    }
    obj2 = DiscordAppStateDefault;
  }
};
prototype["clearTracking"] = function clearTracking() {
  this.clearTimeoutTimer();
  this.startTime = null;
};
const result = size.fileFinishedImporting("modules/quests/QuestHomeRoundtripTracker.tsx");

export default Object.assign({ startTime: null, timeoutTimer: null });