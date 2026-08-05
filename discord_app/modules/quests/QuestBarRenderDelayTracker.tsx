// discord_app/modules/quests/QuestBarRenderDelayTracker.tsx
import { AnalyticEvents } from "ME";

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
    let obj = importDefault(6970);
    obj = { name: null, tags: null };
    obj[0] = require(6975) /* set */.MetricEvents.QUEST_BAR_RENDER_DELAY;
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
    importDefault(698).track(AnalyticEvents.QUEST_BAR_RENDER_DELAY, obj);
    const obj3 = importDefault(698);
  }
};
prototype["startTracking"] = function startTracking(questId) {
  const self = this;
  let closure_0 = questId;
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
      obj = importDefault(10384);
    }
  }
};
prototype["clearTracking"] = function clearTracking() {
  this.clearTimeoutTimer();
  this.startTime = null;
  this.questId = null;
};
const result = require("set").fileFinishedImporting("modules/quests/QuestBarRenderDelayTracker.tsx");

export default Object.create(QuestBarRenderDelayTracker.prototype);