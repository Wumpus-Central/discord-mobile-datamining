// === Module 10539: clearTimeoutTimer ===

// Module 10539 (clearTimeoutTimer)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import setDefault from "set" /* 5011 */;
import set2 from "set" /* 5016 */;
import _modDef10540 from "module_10540" /* 10540 */;

const AnalyticEvents = ME.AnalyticEvents;
let c4 = 30000;
class QuestBarRenderDelayTracker {
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
prototype["sendMetric"] = function sendMetric(arg0, arg1, arg2) {
  if (Math.random() <= 0.1) {
    let obj = setDefault;
    obj = { name: null, tags: null };
    obj[0] = set2.MetricEvents.QUEST_BAR_RENDER_DELAY;
    const _HermesInternal = HermesInternal;
    const items = ["quest_id:" + arg0, ];
    const _HermesInternal2 = HermesInternal;
    items[1] = "timeout:" + arg1;
    obj[1] = items;
    obj.distribution(obj, arg2);
    obj = { quest_id: null, timeout: null, duration: null };
    obj[0] = arg0;
    obj[1] = arg1;
    obj[2] = arg2;
    expandEventPropertiesDefault.track(AnalyticEvents.QUEST_BAR_RENDER_DELAY, obj);
    const obj3 = expandEventPropertiesDefault;
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
      obj = _modDef10540;
    }
  }
};
prototype["clearTracking"] = function clearTracking() {
  this.clearTimeoutTimer();
  this.startTime = null;
  this.questId = null;
};
const result = set.fileFinishedImporting("modules/quests/QuestBarRenderDelayTracker.tsx");

export default Object.create(QuestBarRenderDelayTracker.prototype);