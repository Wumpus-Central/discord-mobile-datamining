// discord_app/modules/gateway/BasicWorkScheduler.tsx
import DISPATCHER_STANDARD_TIMEOUT_MS from "DISPATCHER_STANDARD_TIMEOUT_MS";
import { WorkSchedulerTelemetryEvent } from "WorkSchedulerTelemetry.tsx";

let c3;
let c4;
let c5;
let closure_6;
({ MAX_DISPATCHER_FLUSH_DEADLINE_TRIES: c3, DISPATCHER_STANDARD_TIMEOUT_MS: c4, DISPATCHER_IDEAL_TIME_LIMIT_MS: c5, DISPATCHER_LONG_TIMEOUT_MS: closure_6 } = DISPATCHER_STANDARD_TIMEOUT_MS);
let error = new require("module_38")("DispatcherWorkScheduler");
const tmp3 = new require("module_38")("DispatcherWorkScheduler");
const result = require("WorkSchedulerTelemetryEvent").fileFinishedImporting("modules/gateway/BasicWorkScheduler.tsx");
class BasicWorkScheduler {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[2] = __esModule;
    workSchedulerTelemetry = new require("WorkSchedulerTelemetryEvent").WorkSchedulerTelemetry();
    obj[8] = workSchedulerTelemetry;
    obj[9] = closure_7;
    return obj;
  }
}
const prototype = BasicWorkScheduler.prototype;
prototype["_trackAppBackgrounded"] = function _trackAppBackgrounded(_isBackgrounded) {
  const self = this;
  if (this._isBackgrounded !== _isBackgrounded) {
    self._isBackgrounded = _isBackgrounded;
    if (tmp) {
      const telemetry = self.telemetry;
      telemetry.track(WorkSchedulerTelemetryEvent.WorkSchedulerTelemetryEvent.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED);
      self._processWorkCallback();
    }
    tmp = self._isBackgrounded && self.hasWorkScheduled;
  }
};
prototype["_queueIdleCallback"] = function _queueIdleCallback() {
  const error = new Error("Not implemented");
  throw error;
};
prototype["_clearIdleCallback"] = function _clearIdleCallback() {
  const error = new Error("Not implemented");
  throw error;
};
Object.defineProperty(prototype, "_hasExceededMaxConsecutiveFlushes", {
  get: function _hasExceededMaxConsecutiveFlushes() {
    return this._consecutiveFlushesBeforeQueueEmpty >= closure_3;
  },
  set: undefined
});
prototype["_processWorkCallback"] = function _processWorkCallback(arg0) {
  const self = this;
  if (null != this._workCallbackFn) {
    if (self._hasExceededMaxConsecutiveFlushes) {
      tmp3.log("Unable to fully flush work queue after max retries, skipping future deadline.");
      self._workCallbackFn();
      self.clearWorkTimeout();
      const telemetry2 = self.telemetry;
      telemetry2.measure(WorkSchedulerTelemetryEvent.WorkSchedulerTelemetryMeasurement.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, self._consecutiveFlushesBeforeQueueEmpty);
      const telemetry3 = self.telemetry;
      telemetry3.track(WorkSchedulerTelemetryEvent.WorkSchedulerTelemetryEvent.EXCEEDED_MAX_CONSECUTIVE_FLUSHES);
      self._consecutiveFlushesBeforeQueueEmpty = 0;
      self._nextDispatchTimeout = closure_6;
    } else {
      const _performance = performance;
      const _performance2 = performance;
      const nowResult = performance.now();
      const _workCallbackFnResult1 = self._workCallbackFn(arg0);
      self.clearWorkTimeout();
      self._nextDispatchTimeout = performance.now() - nowResult > closure_5 ? closure_6 : closure_4;
      const _consecutiveFlushesBeforeQueueEmpty = self._consecutiveFlushesBeforeQueueEmpty;
      if (_workCallbackFnResult1) {
        if (_consecutiveFlushesBeforeQueueEmpty > 0) {
          const telemetry = self.telemetry;
          const _parseInt = parseInt;
          const _HermesInternal = HermesInternal;
          telemetry.measure(WorkSchedulerTelemetryEvent.WorkSchedulerTelemetryMeasurement.COUNT_FLUSH_BEFORE_QUEUE_EMPTY, parseInt("" + self._consecutiveFlushesBeforeQueueEmpty));
        }
        self._consecutiveFlushesBeforeQueueEmpty = 0;
        self._criticalWorkScheduled = false;
      } else {
        self._consecutiveFlushesBeforeQueueEmpty = _consecutiveFlushesBeforeQueueEmpty + 1;
      }
      const nowResult1 = performance.now();
    }
  }
};
prototype["markCriticalWorkScheduled"] = function markCriticalWorkScheduled() {
  const self = this;
  this._criticalWorkScheduled = true;
  if (null != this._flushIdleHandler) {
    self._clearIdleCallback();
    self._processWorkCallback();
  }
};
prototype["toggleRequestIdleCallback"] = function toggleRequestIdleCallback(_enableRequestIdleCallback) {
  const self = this;
  this._enableRequestIdleCallback = _enableRequestIdleCallback;
  let hasWorkScheduled = !_enableRequestIdleCallback;
  if (!_enableRequestIdleCallback) {
    hasWorkScheduled = self.hasWorkScheduled;
  }
  if (hasWorkScheduled) {
    self._clearIdleCallback();
    self._processWorkCallback();
  }
};
Object.defineProperty(prototype, "isBackgrounded", {
  get: function isBackgrounded() {
    return this._isBackgrounded;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasWorkScheduled", {
  get: function hasWorkScheduled() {
    return null != this._flushTimeoutHandler || null != this._flushIdleHandler;
  },
  set: undefined
});
Object.defineProperty(prototype, "isRequestIdleCallbackEnabled", {
  get: function isRequestIdleCallbackEnabled() {
    return this._enableRequestIdleCallback;
  },
  set: undefined
});
prototype["clearWorkTimeout"] = function clearWorkTimeout() {
  const self = this;
  if (null != this._flushTimeoutHandler) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self._flushTimeoutHandler);
    self._flushTimeoutHandler = null;
  }
  self._clearIdleCallback();
  self._nextDispatchTimeout = closure_4;
  self._workCallbackFn = null;
};
prototype["requestWorkTimeout"] = function requestWorkTimeout(flush, arg1) {
  let self = this;
  self = this;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  self._workCallbackFn = flush;
  if (!self.hasWorkScheduled) {
    let telemetry = self.telemetry;
    telemetry.time(self(12919).WorkSchedulerTelemetryTiming.TIME_TO_QUEUE_EMPTY);
    if (self._nextDispatchTimeout === closure_6) {
      const telemetry2 = self.telemetry;
      telemetry2.track(tmp(12919).WorkSchedulerTelemetryEvent.LONGER_DISPATCH);
    }
    if (flag) {
      self._queueIdleCallback();
    } else {
      const _setTimeout = setTimeout;
      self._flushTimeoutHandler = setTimeout(() => {
        outer1_1(outer1_2[3])(null != self._workCallbackFn, "Work callback should be set");
        if (self._isBackgrounded) {
          const telemetry = obj.telemetry;
          telemetry.track(self(tmp[2]).WorkSchedulerTelemetryEvent.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED);
          return obj._processWorkCallback();
        } else {
          obj._queueIdleCallback();
        }
        tmp = outer1_2;
      }, self._nextDispatchTimeout);
    }
    tmp = self;
  }
};

export { BasicWorkScheduler };