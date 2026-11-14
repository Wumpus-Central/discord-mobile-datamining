// === Module 14252: CheckpointSessionAnalyticsManager ===

// Module 14252 (CheckpointSessionAnalyticsManager)
import v1 from "v1" /* 1269 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6745 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;

require = fn;
class CheckpointSessionAnalyticsManager {
  constructor() {
    merged = Object.assign({ sessionId: null, didPlayerShareDataWithDiscord: false, stepName: null, isForeground: true, isStopped: true, sessionTimer: null, customizationTimer: null });
    merged[5] = { completedMs: 0, startedAt: null };
    merged[6] = { completedMs: 0, startedAt: null };
    return merged;
  }
}
const prototype = CheckpointSessionAnalyticsManager.prototype;
prototype["initialize"] = function initialize(arg0) {
  ({ didPlayerShareDataWithDiscord, isForeground } = arg0);
  this.sessionId = v1.v4();
  this.didPlayerShareDataWithDiscord = didPlayerShareDataWithDiscord;
  this.stepName = null;
  this.isForeground = isForeground;
  this.isStopped = false;
  this.sessionTimer = { completedMs: 0, startedAt: null };
  this.customizationTimer = { completedMs: 0, startedAt: null };
  this.updateTimers();
};
prototype["setStepName"] = function setStepName(stepName) {
  this.stepName = stepName;
  this.updateTimers();
};
prototype["getStepName"] = function getStepName() {
  return this.stepName;
};
prototype["setForeground"] = function setForeground(stateFromStores) {
  this.isForeground = stateFromStores;
  this.updateTimers();
};
prototype["stop"] = function stop() {
  this.isStopped = true;
  this.updateTimers();
};
prototype["getAnalyticsProperties"] = function getAnalyticsProperties() {
  const self = this;
  const obj = { checkpoint_session_id: this.sessionId, has_personalized_data: null, checkpoint_availability: null, checkpoint_compact_assets: null, time_spent_ms: null, customization_time_spent_ms: null };
  let didPlayerShareDataWithDiscord = this.didPlayerShareDataWithDiscord;
  if (didPlayerShareDataWithDiscord) {
    didPlayerShareDataWithDiscord = null != CheckpointStore.stats;
  }
  obj.has_personalized_data = didPlayerShareDataWithDiscord;
  ({ availability: obj.checkpoint_availability, compactAssets: obj.checkpoint_compact_assets } = CheckpointStore);
  const sessionTimer = self.sessionTimer;
  if (null != sessionTimer.startedAt) {
    const _Date = Date;
    let completedMs = sessionTimer.completedMs + Date.now() - sessionTimer.startedAt;
  } else {
    completedMs = sessionTimer.completedMs;
  }
  obj.time_spent_ms = completedMs;
  const customizationTimer = self.customizationTimer;
  if (null != customizationTimer.startedAt) {
    const _Date2 = Date;
    let completedMs2 = customizationTimer.completedMs + Date.now() - customizationTimer.startedAt;
  } else {
    completedMs2 = customizationTimer.completedMs;
  }
  obj.customization_time_spent_ms = completedMs2;
  return obj;
};
prototype["updateTimers"] = function updateTimers() {
  const self = this;
  const isStopped = this.isStopped;
  let isForeground = !isStopped;
  if (!isStopped) {
    isForeground = self.isForeground;
  }
  const sessionTimer = self.sessionTimer;
  if (isForeground) {
    if (null == sessionTimer.startedAt) {
      const _Date2 = Date;
      sessionTimer.startedAt = Date.now();
    }
    const customizationTimer = self.customizationTimer;
    if (isForeground) {
      isForeground = null != self.stepName;
    }
    if (isForeground) {
      isForeground = CheckpointNavigation.isCheckpointCustomizationRoute(self.stepName);
    }
    if (isForeground) {
      if (null == customizationTimer.startedAt) {
        const _Date4 = Date;
        customizationTimer.startedAt = Date.now();
      }
    }
    if (!isForeground) {
      isForeground = null == customizationTimer.startedAt;
    }
    if (!isForeground) {
      const _Date3 = Date;
      customizationTimer.completedMs = customizationTimer.completedMs + (Date.now() - customizationTimer.startedAt);
      customizationTimer.startedAt = null;
    }
  }
  let tmp2 = isForeground;
  if (!isForeground) {
    tmp2 = null == sessionTimer.startedAt;
  }
  if (!tmp2) {
    const _Date = Date;
    sessionTimer.completedMs = sessionTimer.completedMs + (Date.now() - sessionTimer.startedAt);
    sessionTimer.startedAt = null;
  }
};
let merged = Object.assign({ sessionId: null, didPlayerShareDataWithDiscord: false, stepName: null, isForeground: true, isStopped: true, sessionTimer: null, customizationTimer: null });
merged[5] = { completedMs: 0, startedAt: null };
merged[6] = { completedMs: 0, startedAt: null };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/tracking/CheckpointSessionAnalyticsManager.tsx");

export default merged;