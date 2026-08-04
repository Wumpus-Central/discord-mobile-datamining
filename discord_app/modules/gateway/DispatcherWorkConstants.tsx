// discord_app/modules/gateway/DispatcherWorkConstants.tsx
let c0 = 2.0833333333333335;
const result = require("set").fileFinishedImporting("modules/gateway/DispatcherWorkConstants.tsx");
class WorkIdleDeadline {
  constructor(arg0) {
    flag = require;
    if (require === undefined) {
      flag = false;
    }
    obj = Object.create(new.target.prototype);
    obj._deadlineMs = Math.max(c0, global);
    obj._browserDeadlineMs = global;
    obj._firedDueToMaxTimeout = flag;
    obj._startMs = performance.now();
    return obj;
  }
}
const prototype = WorkIdleDeadline.prototype;
prototype["timeRemaining"] = function timeRemaining() {
  return Math.max(0, this._deadlineMs - (performance.now() - this._startMs));
};
Object.defineProperty(prototype, "didTimeout", {
  get: function didTimeout() {
    return this._firedDueToMaxTimeout;
  },
  set: undefined
});
Object.defineProperty(prototype, "timeSinceExpiration", {
  get: function timeSinceExpiration() {
    return performance.now() - (this._startMs + this._deadlineMs);
  },
  set: undefined
});
prototype["generateDeadlineMetrics"] = function generateDeadlineMetrics() {
  const obj = { isDeadlineNotIdeal: this._browserDeadlineMs < c0, deadlineMs: _deadlineMs.toFixed(2), timeSinceStartMs: null };
  _deadlineMs = this._deadlineMs;
  const diff = performance.now() - this._startMs;
  obj[2] = diff.toFixed(2);
  return obj;
};

export const DISPATCHER_STANDARD_TIMEOUT_MS = 50;
export const DISPATCHER_IDEAL_TIME_LIMIT_MS = 50;
export const DISPATCHER_MIN_DEADLINE_TIME_MS = 2.0833333333333335;
export const DISPATCHER_DEADLINE_OVERHEAD_MS = 3.3333333333333335;
export const NATIVE_WORK_DEADLINE_MS = 5.555555555555556;
export const NATIVE_WORK_BACKOFF_MS = 4.166666666666667;
export const DISPATCHER_LONG_TIMEOUT_MS = 200;
export const MAX_DISPATCHER_TIMEOUT_MS = 1000;
export const MAX_DISPATCHER_FLUSH_DEADLINE_TRIES = 2;
export const DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS = 50;
export { WorkIdleDeadline };