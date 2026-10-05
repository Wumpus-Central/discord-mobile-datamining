// === Module 13451: DispatcherWorkScheduler ===

// Module 13451 (DispatcherWorkScheduler)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import BasicWorkScheduler2 from "BasicWorkScheduler" /* 13452 */;
import DispatcherWorkConstants from "DispatcherWorkConstants" /* 13450 */;
import size from "module_2" /* 2 */;

let importDefault;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
const f114823 = (state) => {
  const result = closure_0._trackAppBackgrounded(state.state === AppStates.BACKGROUND);
};
({ DISPATCHER_CALLBACK_MAX_TIME_REMAINING_MS: c2, NATIVE_WORK_BACKOFF_MS: c3, NATIVE_WORK_DEADLINE_MS: closure_4, WorkIdleDeadline: hasOwnProperty } = DispatcherWorkConstants);
const AppStates = Constants.AppStates;
const BasicWorkScheduler = BasicWorkScheduler2.BasicWorkScheduler;
class DispatcherWorkScheduler extends BasicWorkScheduler {
  constructor() {
    let closure_0;
    const tmp3 = new DispatcherWorkScheduler(tmp2, tmp, new.target, this, undefined);
    importDefault = tmp3;
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("APP_STATE_UPDATE", f114823);
    return tmp3;
  }
  _queueIdleCallback() {
    const self = this;
    if (this._enableRequestIdleCallback) {
      if (!self._criticalWorkScheduled) {
        let tmp = globalThis;
        const _performance = performance;
        let closure_0 = performance.now();
        const _setTimeout = setTimeout;
        self._flushIdleHandler = setTimeout(() => {
          let _consecutiveFlushesBeforeQueueEmpty;
          let _processWorkCallback;
          ({ _processWorkCallback, _consecutiveFlushesBeforeQueueEmpty } = self);
          const tmp = new hasOwnProperty(Math.max(Math.max(0, React3 - (performance.now() - closure_0)) + _false * _consecutiveFlushesBeforeQueueEmpty, React2), false);
          _processWorkCallback(tmp);
        }, 1);
      }
    }
    return self._processWorkCallback();
  }
  _clearIdleCallback() {
    const self = this;
    if (null != this._flushIdleHandler) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self._flushIdleHandler);
      self._flushIdleHandler = null;
    }
  }
}
const prototype = DispatcherWorkScheduler.prototype;
let result = size.fileFinishedImporting("modules/gateway/DispatcherWorkScheduler.native.tsx");

export const createDispatcherWorkScheduler = function createDispatcherWorkScheduler() {
  let closure_0;
  if (typeof DispatcherWorkScheduler === "function") {
    const self = this;
    const self2 = this;
    const tmp5 = new DispatcherWorkScheduler(tmp2, tmp, tmp3, this, undefined);
    importDefault = tmp5;
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("APP_STATE_UPDATE", f114823);
    return tmp5;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};