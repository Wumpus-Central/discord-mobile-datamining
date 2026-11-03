// _runtime/01728_setupSetTimeout.js
import setupTaskQueue from "01726_setupTaskQueue.js";

let items = [
  {
    code: "(function setupSetTimeout_Pnpm_setTimeoutTs1(){let[pushTask]=this.__closure;const pendingHandlers=new Set();let ID=0;const setTimeoutPolyfill=function(callback,delay=0,...args){const handlerId=ID++;const timeoutCallback=function(){if(!pendingHandlers.has(handlerId)){return;}callback(...args);pendingHandlers.delete(handlerId);};pendingHandlers.add(handlerId);pushTask(timeoutCallback,handlerId,delay);return handlerId;};const clearTimeoutPolyfill=function(timeoutHandle){pendingHandlers.delete(timeoutHandle);};globalThis.setTimeout=setTimeoutPolyfill;globalThis.clearTimeout=clearTimeoutPolyfill;})",
  },
  setupTaskQueue.pushTask,
];
let c0;
[tmp2, tmp3] = items;
function setupSetTimeout() {
  const set = new Set();
  c1 = 0;
  globalThis.setTimeout = (arg0) => {
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    [...arguments].slice();
    closure_1 = tmp + 1;
    closure_2 = tmp;
    arg0.add(+closure_1);
    arg0(
      () => {
        if (set.has(closure_2)) {
          items = [];
          HermesBuiltin.arraySpread(closure_1, 0);
          HermesBuiltin.apply(items, undefined);
          set.delete(closure_2);
        }
      },
      +closure_1,
      num,
    );
    return +closure_1;
  };
  globalThis.clearTimeout = (arg0) => {
    set.delete(arg0);
  };
}
const items1 = [tmp3];
setupSetTimeout.__closure = items1;
setupSetTimeout.__workletHash = 2503136938124;
setupSetTimeout.__initData = tmp2;

export { setupSetTimeout };
