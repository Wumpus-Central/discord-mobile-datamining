// discord_app/modules/gateway/BasicWorkScheduler.tsx
import LoggerDefault from "../debug/Logger.tsx";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import WorkSchedulerTelemetry from "WorkSchedulerTelemetry.tsx";
import DispatcherWorkConstants from "DispatcherWorkConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({
  MAX_DISPATCHER_FLUSH_DEADLINE_TRIES: c3,
  DISPATCHER_STANDARD_TIMEOUT_MS: closure_4,
  DISPATCHER_IDEAL_TIME_LIMIT_MS: hasOwnProperty,
  DISPATCHER_LONG_TIMEOUT_MS: metroRequire,
} = DispatcherWorkConstants);
const metroImportDefault = new LoggerDefault("DispatcherWorkScheduler");
new LoggerDefault("DispatcherWorkScheduler");
const result = size.fileFinishedImporting("modules/gateway/BasicWorkScheduler.tsx");
class BasicWorkScheduler {
  constructor() {
    const merged = Object.assign({
      _flushTimeoutHandler: null,
      _flushIdleHandler: null,
      _nextDispatchTimeout: null,
      _workCallbackFn: null,
      _consecutiveFlushesBeforeQueueEmpty: 0,
      _isBackgrounded: false,
      _enableRequestIdleCallback: true,
      _criticalWorkScheduled: false,
      telemetry: null,
      _logger: null,
    });
    merged[2] = closure_4;
    const workSchedulerTelemetry = new WorkSchedulerTelemetry.WorkSchedulerTelemetry();
    merged[8] = workSchedulerTelemetry;
    merged[9] = logger;
    return merged;
  }
  _trackAppBackgrounded(_isBackgrounded) {
    const self = this;
    if (this._isBackgrounded !== _isBackgrounded) {
      self._isBackgrounded = _isBackgrounded;
      const tmp = self._isBackgrounded && self.hasWorkScheduled;
      if (tmp) {
        const telemetry = self.telemetry;
        telemetry.track(WorkSchedulerTelemetry.WorkSchedulerTelemetryEvent.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED);
        self._processWorkCallback();
      }
    }
  }
  _queueIdleCallback() {
    const error = new Error("Not implemented");
    throw error;
  }
  _clearIdleCallback() {
    const error = new Error("Not implemented");
    throw error;
  }
  _processWorkCallback(arg0) {
    const self = this;
    if (null != this._workCallbackFn) {
      if (self._hasExceededMaxConsecutiveFlushes) {
        logger.log("Unable to fully flush work queue after max retries, skipping future deadline.");
        self._workCallbackFn();
        self.clearWorkTimeout();
        const telemetry2 = self.telemetry;
        telemetry2.measure(
          WorkSchedulerTelemetry.WorkSchedulerTelemetryMeasurement.COUNT_FLUSH_BEFORE_QUEUE_EMPTY,
          self._consecutiveFlushesBeforeQueueEmpty,
        );
        const telemetry3 = self.telemetry;
        telemetry3.track(WorkSchedulerTelemetry.WorkSchedulerTelemetryEvent.EXCEEDED_MAX_CONSECUTIVE_FLUSHES);
        self._consecutiveFlushesBeforeQueueEmpty = 0;
        self._nextDispatchTimeout = metroRequire;
      } else {
        const _performance = performance;
        const _performance2 = performance;
        const nowResult = performance.now();
        const _workCallbackFnResult1 = self._workCallbackFn(arg0);
        const nowResult1 = performance.now();
        self.clearWorkTimeout();
        self._nextDispatchTimeout = nowResult1 - nowResult > hasOwnProperty ? metroRequire : closure_4;
        const _consecutiveFlushesBeforeQueueEmpty = self._consecutiveFlushesBeforeQueueEmpty;
        if (_workCallbackFnResult1) {
          if (_consecutiveFlushesBeforeQueueEmpty > 0) {
            const telemetry = self.telemetry;
            const measure = telemetry.measure;
            const _parseInt = parseInt;
            const _HermesInternal = HermesInternal;
            measure(
              WorkSchedulerTelemetry.WorkSchedulerTelemetryMeasurement.COUNT_FLUSH_BEFORE_QUEUE_EMPTY,
              parseInt("" + self._consecutiveFlushesBeforeQueueEmpty),
            );
          }
          self._consecutiveFlushesBeforeQueueEmpty = 0;
          self._criticalWorkScheduled = false;
        } else {
          self._consecutiveFlushesBeforeQueueEmpty = _consecutiveFlushesBeforeQueueEmpty + 1;
        }
      }
    }
  }
  markCriticalWorkScheduled() {
    const self = this;
    this._criticalWorkScheduled = true;
    if (null != this._flushIdleHandler) {
      self._clearIdleCallback();
      self._processWorkCallback();
    }
  }
  toggleRequestIdleCallback(_enableRequestIdleCallback) {
    const self = this;
    this._enableRequestIdleCallback = _enableRequestIdleCallback;
    const tmp = !_enableRequestIdleCallback && self.hasWorkScheduled;
    if (tmp) {
      self._clearIdleCallback();
      self._processWorkCallback();
    }
  }
  clearWorkTimeout() {
    const self = this;
    if (null != this._flushTimeoutHandler) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self._flushTimeoutHandler);
      self._flushTimeoutHandler = null;
    }
    self._clearIdleCallback();
    self._nextDispatchTimeout = _nextDispatchTimeout;
    self._workCallbackFn = null;
  }
  requestWorkTimeout(flush, arg1) {
    const self = this;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    self._workCallbackFn = flush;
    if (!self.hasWorkScheduled) {
      let telemetry = self.telemetry;
      telemetry.time(self(13453).WorkSchedulerTelemetryTiming.TIME_TO_QUEUE_EMPTY);
      const tmp = self;
      if (self._nextDispatchTimeout === closure_6) {
        const telemetry2 = self.telemetry;
        telemetry2.track(tmp(13453).WorkSchedulerTelemetryEvent.LONGER_DISPATCH);
      }
      if (flag) {
        self._queueIdleCallback();
      } else {
        const _setTimeout = setTimeout;
        self._flushTimeoutHandler = setTimeout(() => {
          _modDef38(null != self._workCallbackFn, "Work callback should be set");
          if (self._isBackgrounded) {
            const telemetry = self.telemetry;
            telemetry.track(WorkSchedulerTelemetry.WorkSchedulerTelemetryEvent.SKIP_IDLE_CALLBACK_DUE_TO_BACKGROUNDED);
            return self._processWorkCallback();
          } else {
            self._queueIdleCallback();
          }
        }, self._nextDispatchTimeout);
      }
    }
  }
}
const prototype = BasicWorkScheduler.prototype;
Object.defineProperty(prototype, "_hasExceededMaxConsecutiveFlushes", {
  get: function _hasExceededMaxConsecutiveFlushes() {
    return this._consecutiveFlushesBeforeQueueEmpty >= _false;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isBackgrounded", {
  get: function isBackgrounded() {
    return this._isBackgrounded;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasWorkScheduled", {
  get: function hasWorkScheduled() {
    return null != this._flushTimeoutHandler || null != this._flushIdleHandler;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isRequestIdleCallbackEnabled", {
  get: function isRequestIdleCallbackEnabled() {
    return this._enableRequestIdleCallback;
  },
  set: undefined,
});

export { BasicWorkScheduler };
