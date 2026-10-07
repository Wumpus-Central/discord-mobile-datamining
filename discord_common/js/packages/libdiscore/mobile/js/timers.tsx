// discord_common/js/packages/libdiscore/mobile/js/timers.tsx
import global_types from "global_types.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
const LIBDISCORE_JSI = global_types.typedGlobal.LIBDISCORE_JSI;
let global = null;
const map = new Map();
let closure_3 = LIBDISCORE_JSI.makeTimerManager(
  function expirationCallback(arg0, arg1) {
    value = map.get(arg0);
    if (value) {
      if (arg1) {
        map.delete(arg0);
      }
      value();
    }
  },
  {
    slowExecutionThresholdMillis: 500,
    delayedExecutionThresholdMillis: 5000,
    onSlowTimer(arg0, arg1, arg2, arg3) {
      if (global != null) {
        tmp(arg0, arg1, arg2, arg3);
      }
    },
  },
);
let result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/timers.tsx");

export function setTimersMonitorCallback(onTimersDelayCallback) {
  global = onTimersDelayCallback;
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
