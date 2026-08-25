// === Module 13115: _queueIdleCallback ===

// Module 13115 (_queueIdleCallback)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _trackAppBackgrounded from "_trackAppBackgrounded" /* 13116 */;
import DISPATCHER_STANDARD_TIMEOUT_MS from "DISPATCHER_STANDARD_TIMEOUT_MS" /* 13114 */;

({ DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS: obj1, NATIVE_WORK_BACKOFF_MS: c3, NATIVE_WORK_DEADLINE_MS: c4, WorkIdleDeadline: c5 } = DISPATCHER_STANDARD_TIMEOUT_MS);
const AppStates = ME.AppStates;
const BasicWorkScheduler = _trackAppBackgrounded.BasicWorkScheduler;
class DispatcherWorkScheduler extends BasicWorkScheduler {
  constructor() {
    closure_0 = undefined;
    tmp3 = new DispatcherWorkScheduler(tmp2, tmp, new.target, new.target, undefined);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp3;
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
      closure_0 = performance.now();
      const _setTimeout = setTimeout;
      self._flushIdleHandler = setTimeout(() => {
        ({ _processWorkCallback, _consecutiveFlushesBeforeQueueEmpty } = self);
        _processWorkCallback(new closure_1_5(Math.max(Math.max(0, closure_1_4 - (performance.now() - closure_0)) + closure_1_3 * _consecutiveFlushesBeforeQueueEmpty, closure_1_2), false));
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
let result = set.fileFinishedImporting("modules/gateway/DispatcherWorkScheduler.native.tsx");

export const createDispatcherWorkScheduler = function createDispatcherWorkScheduler() {
  if (typeof DispatcherWorkScheduler !== "function") {
    HermesBuiltin.throwTypeError();
  }
  importDefault = undefined;
  const tmp3 = new DispatcherWorkScheduler("Trying to call a non-function", tmp, DispatcherWorkScheduler, new.target, undefined);
  // ThrowIfThisInitialized (0x7c)
  importDefault = tmp3;
  const subscription = dispatcherDefault.subscribe("APP_STATE_UPDATE", (arg0) => {
    const result = obj._trackAppBackgrounded(tmp2 === tmp);
  });
  return tmp3;
};