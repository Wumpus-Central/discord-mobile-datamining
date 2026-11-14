// === Module 1734: setupSetInterval ===

// Module 1734 (setupSetInterval)
const items = [{ code: "(function setupSetInterval_Pnpm_setIntervalPolyfillTs1(){const intervalHandleToTimeoutHandle=new Map();const setIntervalPolyfill=function(callback,delay=0,...args){let intervalHandle=0;const repeatingCallback=function(){const timeoutHandle=setTimeout(repeatingCallback,delay);intervalHandleToTimeoutHandle.set(intervalHandle,timeoutHandle);callback(...args);};intervalHandle=setTimeout(repeatingCallback,delay);intervalHandleToTimeoutHandle.set(intervalHandle,intervalHandle);return intervalHandle;};const clearIntervalPolyfill=function(intervalHandle){const timeoutHandle=intervalHandleToTimeoutHandle.get(intervalHandle);clearTimeout(timeoutHandle);intervalHandleToTimeoutHandle.delete(intervalHandle);};globalThis.setInterval=setIntervalPolyfill;globalThis.clearInterval=clearIntervalPolyfill;})" }];
[tmp2] = items;
function setupSetInterval() {
  const map = new Map();
  globalThis.setInterval = (arg0) => {
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    const args = [...arguments].slice();
    function repeatingCallback() {
      const result = map.set(timerId, setTimeout(repeatingCallback, num));
      closure_0(...closure_2);
    }
    const timerId = setTimeout(repeatingCallback, num);
    let result = arg0.set(timerId, timerId);
    return timerId;
  };
  globalThis.clearInterval = (arg0) => {
    clearTimeout(map.get(arg0));
    map.delete(arg0);
  };
}
setupSetInterval.__workletHash = 1529762171661;
setupSetInterval.__initData = tmp2;

export { setupSetInterval };