// === Module 1750: ? ===

// Module 1750
let items = [{ code: "(function setupSetTimeout_Pnpm_setTimeoutPolyfillTs1(){const timeoutHandleToRafHandle=new Map();const setTimeoutPolyfill=function(callback,delay=0,...args){const start=performance.now();let timeoutHandle=0;const rafCallback=function(){const now=performance.now();if(now-start>=delay){callback(...args);timeoutHandleToRafHandle.delete(timeoutHandle);}else{const rafHandle=requestAnimationFrame(rafCallback);timeoutHandleToRafHandle.set(timeoutHandle,rafHandle);}};timeoutHandle=requestAnimationFrame(rafCallback);timeoutHandleToRafHandle.set(timeoutHandle,timeoutHandle);return timeoutHandle;};const clearTimeoutPolyfill=function(timeoutHandle){const rafHandle=timeoutHandleToRafHandle.get(timeoutHandle);timeoutHandleToRafHandle.delete(timeoutHandle);cancelAnimationFrame(rafHandle);};globalThis.setTimeout=setTimeoutPolyfill;globalThis.clearTimeout=clearTimeoutPolyfill;})" }];
[tmp2] = items;
function setupSetTimeout() {
  const map = new Map();
  globalThis.setTimeout = (arg0) => {
    closure_2 = [...arguments].slice();
    closure_3 = performance.now();
    function rafCallback() {
      if (performance.now() - closure_3 >= num) {
        items = [];
        HermesBuiltin.arraySpread(closure_2, 0);
        HermesBuiltin.apply(items, undefined);
        map.delete(animationFrame);
      } else {
        const _requestAnimationFrame = requestAnimationFrame;
        const result = map.set(animationFrame, requestAnimationFrame(rafCallback));
      }
    }
    const animationFrame = requestAnimationFrame(rafCallback);
    let result = arg0.set(animationFrame, animationFrame);
    return animationFrame;
  };
  globalThis.clearTimeout = (arg0) => {
    value = map.get(arg0);
    map.delete(arg0);
    cancelAnimationFrame(value);
  };
}
setupSetTimeout.__workletHash = 2751764254925;
setupSetTimeout.__initData = tmp2;

export { setupSetTimeout };