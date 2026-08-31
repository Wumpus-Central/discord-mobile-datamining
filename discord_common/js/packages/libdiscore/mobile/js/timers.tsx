// === Module 1921: setTimeout ===

// Module 1921 (setTimeout)
import set from "set" /* 2 */;
import typedGlobal from "typedGlobal" /* 1918 */;

function setTimeout(arg0, arg1) {
  let num = arg1;
  if (arg1 == null) {
    num = 0;
  }
  const registerTimeoutResult = closure_3.registerTimeout(Math.max(num, 4));
  const result = map.set(registerTimeoutResult, arg0);
  return registerTimeoutResult;
}
function setInterval(arg0, arg1) {
  let num = arg1;
  if (arg1 == null) {
    num = 0;
  }
  const registerIntervalResult = closure_3.registerInterval(Math.max(num, 4));
  const result = map.set(registerIntervalResult, arg0);
  return registerIntervalResult;
}
function clearTimeout(arg0) {
  let deleteResult = null != arg0;
  if (deleteResult) {
    deleteResult = map.delete(arg0);
  }
  if (deleteResult) {
    closure_3.clear(arg0);
  }
}
const LIBDISCORE_JSI = typedGlobal.typedGlobal.LIBDISCORE_JSI;
let c1 = null;
const map = new Map();
let closure_3 = LIBDISCORE_JSI.makeTimerManager(function expirationCallback(arg0, arg1) {
  const value = map.get(arg0);
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
    if (c1 != null) {
      tmp(arg0, arg1, arg2, arg3);
    }
  }
});
let result = set.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/timers.tsx");

export function setTimersMonitorCallback(onTimersDelayCallback) {
  closure_1 = onTimersDelayCallback;
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