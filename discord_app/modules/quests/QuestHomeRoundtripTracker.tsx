// discord_app/modules/quests/QuestHomeRoundtripTracker.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import setDefault from "../monitoring/MonitoringAgent.tsx";
import set2 from "../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import _modDef10625 from "../app_state/DiscordAppState.native.tsx";

const AnalyticEvents = ME.AnalyticEvents;
let c4 = 30000;
class QuestHomeRoundtripTracker {
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
prototype["sendMetric"] = function sendMetric(timeout, duration) {
  let obj = expandEventPropertiesDefault;
  obj = { timeout, duration };
  obj.track(AnalyticEvents.QUEST_HOME_ROUNDTRIP, obj);
  if (Math.random() <= 0.1) {
    obj = { name: null, tags: null };
    obj[0] = set2.MetricEvents.QUEST_HOME_ROUNDTRIP;
    const _HermesInternal = HermesInternal;
    const items = ["includes_bounties:" + arg2, ];
    const _HermesInternal2 = HermesInternal;
    items[1] = "timeout:" + timeout;
    obj[1] = items;
    setDefault.distribution(obj, duration);
    const tmpResult = setDefault;
  }
};
prototype["startTracking"] = function startTracking() {
  let self = this;
  self = this;
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
    obj2 = _modDef10625;
  }
};
prototype["clearTracking"] = function clearTracking() {
  this.clearTimeoutTimer();
  this.startTime = null;
};
const result = set.fileFinishedImporting("modules/quests/QuestHomeRoundtripTracker.tsx");

export default Object.create(QuestHomeRoundtripTracker.prototype);