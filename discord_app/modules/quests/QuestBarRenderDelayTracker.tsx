// discord_app/modules/quests/QuestBarRenderDelayTracker.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import MonitoringAgentDefault from "../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import DiscordAppStateDefault from "../app_state/DiscordAppState.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
let c4 = 30000;
class QuestBarRenderDelayTracker {
  constructor() {
    return Object.assign({ startTime: null, questId: null, timeoutTimer: null });
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
prototype["sendMetric"] = function sendMetric(quest_id, timeout, duration) {
  if (Math.random() <= 0.1) {
    let obj = { name: MetricEvents.MetricEvents.QUEST_BAR_RENDER_DELAY, tags: null };
    const _HermesInternal = HermesInternal;
    const items = ["quest_id:" + quest_id];
    const _HermesInternal2 = HermesInternal;
    items[1] = "timeout:" + timeout;
    obj.tags = items;
    obj.distribution(obj, duration);
    obj = { quest_id, timeout, duration };
    AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_BAR_RENDER_DELAY, obj);
  }
};
prototype["startTracking"] = function startTracking(questId) {
  const self = this;
  closure_0 = questId;
  this.clearTracking();
  this.startTime = performance.now();
  this.questId = questId;
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
    if (self.questId === arg0) {
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
        self.sendMetric(arg0, flag, Math.min(rounded, c4));
      }
      obj = DiscordAppStateDefault;
    }
  }
};
prototype["clearTracking"] = function clearTracking() {
  this.clearTimeoutTimer();
  this.startTime = null;
  this.questId = null;
};
const result = size.fileFinishedImporting("modules/quests/QuestBarRenderDelayTracker.tsx");

export default Object.assign({ startTime: null, questId: null, timeoutTimer: null });
