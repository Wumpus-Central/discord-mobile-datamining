// === Module 567: timers ===

// Module 567 (timers)
import global_types from "global_types" /* 564 */;
import size from "module_2" /* 2 */;

function setTimeout(arg0, arg1) {
  let num = arg1;
  if (arg1 == null) {
    num = 0;
  }
  const registerTimeoutResult = closure_5.registerTimeout(Math.max(num, 4));
  const result = map.set(registerTimeoutResult, arg0);
  return registerTimeoutResult + c2;
}
function setInterval(arg0, arg1) {
  let num = arg1;
  if (arg1 == null) {
    num = 0;
  }
  const registerIntervalResult = closure_5.registerInterval(Math.max(num, 4));
  const result = map.set(registerIntervalResult, arg0);
  return registerIntervalResult + c2;
}
function clearTimeout(arg0) {
  if (null != arg0) {
    let diff = null;
    if (arg0 >= c2) {
      diff = arg0 - c2;
    }
    if (null != diff) {
      if (map.delete(diff)) {
        closure_5.clear(diff);
      }
    } else if (clearTimeout != null) {
      tmp2(arg0);
    }
  }
}
const LIBDISCORE_JSI = global_types.typedGlobal.LIBDISCORE_JSI;
let global = null;
let c2 = 4294967296;
const map = new Map();
clearTimeout = null;
let closure_5 = LIBDISCORE_JSI.makeTimerManager(function expirationCallback(arg0, arg1) {
  value = map.get(arg0);
  if (value) {
    if (arg1) {
      map.delete(arg0);
    }
    value();
  }
}, {
  slowExecutionThresholdMillis: 500,
  delayedExecutionThresholdMillis: 5000,
  onSlowTimer(arg0, arg1, arg2, arg3) {
    if (global != null) {
      tmp(arg0 + c2, arg1, arg2, arg3);
    }
  }
});
let result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/timers.tsx");

export function setTimersMonitorCallback(onTimersDelayCallback) {
  global = onTimersDelayCallback;
}
export const TIMER_ID_OFFSET = 4294967296;
export { setTimeout };
export { setInterval };
export { clearTimeout };
export const clearInterval = clearTimeout;
export const registerTimerPolyfills = function registerTimerPolyfills() {
  if (null == clearTimeout) {
    const _globalThis = globalThis;
    clearTimeout = clearTimeout;
  }
  window.setTimeout = setTimeout;
  window.setInterval = setInterval;
  window.clearTimeout = clearTimeout;
  window.clearInterval = clearTimeout;
};
export const keepAliveWorkaround = function keepAliveWorkaround() {
  LIBDISCORE_JSI.runtimeExecutorDemo(5000);
};