// === Module 567: timers ===

// Module 567 (timers)
import global_types from "global_types" /* 564 */;
import size from "module_2" /* 2 */;

function setTimeout(arg0, arg1) {
  let num = arg1;
  const _Math = Math;
  if (arg1 == null) {
    num = 0;
  }
  const registerTimeoutResult = closure_3.registerTimeout(max(num, 4));
  const result = map.set(registerTimeoutResult, arg0);
  return registerTimeoutResult;
}
function setInterval(arg0, arg1) {
  let num = arg1;
  const _Math = Math;
  if (arg1 == null) {
    num = 0;
  }
  const registerIntervalResult = closure_3.registerInterval(max(num, 4));
  const result = map.set(registerIntervalResult, arg0);
  return registerIntervalResult;
}
function clearTimeout(arg0) {
  const deleteResult = null != arg0 && map.delete(arg0);
  if (deleteResult) {
    closure_3.clear(arg0);
  }
}
const LIBDISCORE_JSI = global_types.typedGlobal.LIBDISCORE_JSI;
let c1 = null;
const obj = {
  slowExecutionThresholdMillis: 500,
  delayedExecutionThresholdMillis: 5000,
  onSlowTimer(arg0, arg1, arg2, arg3) {
    if (c1 != null) {
      tmp(arg0, arg1, arg2, arg3);
    }
  }
};
const map = new Map();
let closure_3 = LIBDISCORE_JSI.makeTimerManager(function expirationCallback(arg0, arg1) {
  const value = map.get(arg0);
  if (value) {
    const tmp2 = arg1;
    if (tmp2) {
      map.delete(arg0);
    }
    value();
  }
}, obj);
let result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/timers.tsx");

export function setTimersMonitorCallback(onTimersDelayCallback) {
  c1 = onTimersDelayCallback;
}
export { setTimeout };
export { setInterval };
export { clearTimeout };
export const clearInterval = clearTimeout;
export const registerTimerPolyfills = function registerTimerPolyfills() {
  window.setTimeout = setTimeout;
  window.setInterval = setInterval;
  window.clearTimeout = clearTimeout;
  window.clearInterval = clearTimeout;
};
export const keepAliveWorkaround = function keepAliveWorkaround() {
  LIBDISCORE_JSI.runtimeExecutorDemo(5000);
};