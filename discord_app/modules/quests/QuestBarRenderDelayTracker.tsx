// === Module 9710: QuestBarRenderDelayTracker ===

// Module 9710 (QuestBarRenderDelayTracker)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6540 */;
import MetricEvents from "MetricEvents" /* 6545 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import DiscordAppStateDefault from "DiscordAppState" /* 6872 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let c4 = 30000;
class QuestBarRenderDelayTracker {
  constructor() {
    return Object.assign({ startTime: null, adCreativeId: null, adCreativeType: null, timeoutTimer: null });
  }
}
const prototype = QuestBarRenderDelayTracker.prototype;
prototype["clearTimeoutTimer"] = function clearTimeoutTimer() {
  const self = this;
  if (null != this.timeoutTimer) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.timeoutTimer);
    self.timeoutTimer = null;
  }
};
prototype["sendMetric"] = function sendMetric(ad_creative_id, ad_creative_type, timeout, duration) {
  if (Math.random() <= 0.1) {
    const obj2 = { name: MetricEvents.MetricEvents.QUEST_BAR_RENDER_DELAY, tags: null };
    const _HermesInternal = HermesInternal;
    const items = ["ad_creative_id:" + ad_creative_id, , ];
    const _HermesInternal2 = HermesInternal;
    items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[ad_creative_type];
    const _HermesInternal3 = HermesInternal;
    items[2] = "timeout:" + timeout;
    obj2.tags = items;
    MonitoringAgentDefault.distribution(obj2, duration);
    const obj4 = { ad_creative_id, ad_creative_type, timeout, duration };
    AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_BAR_RENDER_DELAY, obj4);
  }
};
prototype["startTracking"] = function startTracking(adCreativeId, adCreativeType) {
  const self = this;
  closure_0 = adCreativeId;
  this.clearTracking();
  this.startTime = performance.now();
  this.adCreativeId = adCreativeId;
  this.adCreativeType = adCreativeType;
  this.timeoutTimer = setTimeout(() => {
    self.stopTracking(closure_0, true);
  }, c4);
};
prototype["stopTracking"] = function stopTracking(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const self = this;
  if (null !== this.startTime) {
    if (self.adCreativeId === arg0) {
      if (null !== self.adCreativeType) {
        if ("active" !== obj.getState()) {
          self.clearTracking();
        } else {
          if (flag) {
            let rounded = c4;
          } else {
            const _Math = Math;
            const _performance = performance;
            rounded = Math.round(performance.now() - self.startTime);
          }
          const _Math2 = Math;
          self.sendMetric(arg0, self.adCreativeType, flag, Math.min(rounded, c4));
        }
        obj = DiscordAppStateDefault;
      }
    }
  }
};
prototype["clearTracking"] = function clearTracking() {
  this.clearTimeoutTimer();
  this.startTime = null;
  this.adCreativeId = null;
  this.adCreativeType = null;
};
const result = size.fileFinishedImporting("modules/quests/QuestBarRenderDelayTracker.tsx");

export default Object.assign({ startTime: null, adCreativeId: null, adCreativeType: null, timeoutTimer: null });