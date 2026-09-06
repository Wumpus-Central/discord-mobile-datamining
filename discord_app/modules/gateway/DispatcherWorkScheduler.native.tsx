// === Module 13640: DispatcherWorkScheduler ===

// Module 13640 (DispatcherWorkScheduler)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import BasicWorkScheduler2 from "BasicWorkScheduler" /* 13641 */;
import DispatcherWorkConstants from "DispatcherWorkConstants" /* 13639 */;
import size from "module_2" /* 2 */;

({ DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS: c2, NATIVE_WORK_BACKOFF_MS: c3, NATIVE_WORK_DEADLINE_MS: closure_4, WorkIdleDeadline: hasOwnProperty } = DispatcherWorkConstants);
const AppStates = Constants.AppStates;
const BasicWorkScheduler = BasicWorkScheduler2.BasicWorkScheduler;
class DispatcherWorkScheduler extends BasicWorkScheduler {
  constructor() {
    closure_0 = undefined;
    tmp3 = new DispatcherWorkScheduler(tmp2, tmp, new.target, new.target, undefined);
    closure_0 = tmp3;
    obj = closure_0(closure_1[3]);
    subscription = obj.subscribe("APP_STATE_UPDATE", (state) => {
      const result = closure_0._trackAppBackgrounded(state.state === AppStates.BACKGROUND);
    });
    return tmp3;
  }
}
const prototype = DispatcherWorkScheduler.prototype;
prototype["_queueIdleCallback"] = function _queueIdleCallback() {
  const self = this;
  if (this._enableRequestIdleCallback) {
    if (!self._criticalWorkScheduled) {
      const _performance = performance;
      closure_0 = performance.now();
      const _setTimeout = setTimeout;
      self._flushIdleHandler = setTimeout(() => {
        ({ _processWorkCallback, _consecutiveFlushesBeforeQueueEmpty } = self);
        _processWorkCallback(new hasOwnProperty(Math.max(Math.max(0, React4 - (performance.now() - closure_0)) + React3 * _consecutiveFlushesBeforeQueueEmpty, React2), false));
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
let result = size.fileFinishedImporting("modules/gateway/DispatcherWorkScheduler.native.tsx");

export const createDispatcherWorkScheduler = function createDispatcherWorkScheduler() {
  if (typeof DispatcherWorkScheduler === "function") {
    const tmp7 = new DispatcherWorkScheduler(tmp2, tmp, tmp3, new.target, undefined);
    importDefault = tmp7;
    const subscription = DispatcherDefault.subscribe("APP_STATE_UPDATE", (state) => {
      const result = closure_0._trackAppBackgrounded(state.state === AppStates.BACKGROUND);
    });
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};