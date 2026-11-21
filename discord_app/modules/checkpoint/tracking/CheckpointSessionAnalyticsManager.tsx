// === Module 12491: CheckpointSessionAnalyticsManager ===

// Module 12491 (CheckpointSessionAnalyticsManager)
import v1 from "v1" /* 1268 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6338 */;
import CheckpointStore from "CheckpointStore" /* 12492 */;

require = fn;
class CheckpointSessionAnalyticsManager {
  constructor() {
    merged = Object.assign({ sessionId: null, stepName: null, isForeground: true, isStopped: true, sessionTimer: null, customizationTimer: null });
    merged[4] = { completedMs: 0, startedAt: null };
    merged[5] = { completedMs: 0, startedAt: null };
    return merged;
  }
}
const prototype = CheckpointSessionAnalyticsManager.prototype;
prototype["initialize"] = function initialize(isForeground) {
  this.sessionId = v1.v4();
  this.stepName = null;
  this.isForeground = isForeground.isForeground;
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
  const obj = { checkpoint_session_id: this.sessionId, has_personalized_data: null != CheckpointStore.stats, checkpoint_availability: CheckpointStore.availability, checkpoint_compact_assets: CheckpointStore.compactAssets, time_spent_ms: null, customization_time_spent_ms: null };
  const sessionTimer = this.sessionTimer;
  if (null != sessionTimer.startedAt) {
    const _Date = Date;
    let completedMs = sessionTimer.completedMs + Date.now() - sessionTimer.startedAt;
  } else {
    completedMs = sessionTimer.completedMs;
  }
  obj.time_spent_ms = completedMs;
  const customizationTimer = this.customizationTimer;
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
let merged = Object.assign({ sessionId: null, stepName: null, isForeground: true, isStopped: true, sessionTimer: null, customizationTimer: null });
merged[4] = { completedMs: 0, startedAt: null };
merged[5] = { completedMs: 0, startedAt: null };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/tracking/CheckpointSessionAnalyticsManager.tsx");

export default merged;