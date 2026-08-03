// === Module 12784: _queueIdleCallback ===

// Module 12784 (_queueIdleCallback)
import DISPATCHER_STANDARD_TIMEOUT_MS from "DISPATCHER_STANDARD_TIMEOUT_MS";
import { AppStates } from "ME";
import { BasicWorkScheduler } from "_trackAppBackgrounded";

let c3;
let c4;
let c5;
let obj1;
({ DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS: obj1, NATIVE_WORK_BACKOFF_MS: c3, NATIVE_WORK_DEADLINE_MS: c4, WorkIdleDeadline: c5 } = DISPATCHER_STANDARD_TIMEOUT_MS);
class DispatcherWorkScheduler extends BasicWorkScheduler {
  constructor() {
    c0 = undefined;
    tmp3 = new DispatcherWorkScheduler(tmp2, tmp, new.target, new.target, undefined);
    // ThrowIfThisInitialized (0x7c)
    c0 = tmp3;
    obj = require("dispatcher");
    subscription = obj.subscribe("APP_STATE_UPDATE", (arg0) => {
      const result = obj._trackAppBackgrounded(tmp2 === tmp);
    });
    return tmp3;
  }
}
const prototype = DispatcherWorkScheduler.prototype;
prototype["_queueIdleCallback"] = function _queueIdleCallback() {
  let self = this;
  self = this;
  if (this._enableRequestIdleCallback) {
    if (!self._criticalWorkScheduled) {
      const _performance = performance;
      let closure_0 = performance.now();
      const _setTimeout = setTimeout;
      self._flushIdleHandler = setTimeout(() => {
        let _consecutiveFlushesBeforeQueueEmpty;
        let _processWorkCallback;
        ({ _processWorkCallback, _consecutiveFlushesBeforeQueueEmpty } = self);
        _processWorkCallback(new outer1_5(Math.max(Math.max(0, outer1_4 - (performance.now() - closure_0)) + outer1_3 * _consecutiveFlushesBeforeQueueEmpty, outer1_2), false));
      }, 1);
    }
  }
  return self._processWorkCallback();
};
prototype["_clearIdleCallback"] = function _clearIdleCallback() {
  const self = this;
  if (null != this._flushIdleHandler) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self._flushIdleHandler);
    self._flushIdleHandler = null;
  }
};
let result = require("_trackAppBackgrounded").fileFinishedImporting("modules/gateway/DispatcherWorkScheduler.native.tsx");

export const createDispatcherWorkScheduler = function createDispatcherWorkScheduler() {
  if (typeof DispatcherWorkScheduler !== "error") {
    HermesBuiltin.throwTypeError();
  }
  let importDefault;
  const tmp3 = new DispatcherWorkScheduler("Trying to call a non-function", tmp, DispatcherWorkScheduler, new.target, undefined);
  // ThrowIfThisInitialized (0x7c)
  importDefault = tmp3;
  const subscription = importDefault(709).subscribe("APP_STATE_UPDATE", (arg0) => {
    const result = obj._trackAppBackgrounded(tmp2 === tmp);
  });
  return tmp3;
};