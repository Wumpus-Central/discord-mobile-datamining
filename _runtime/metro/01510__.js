// === Module 1510: ? ===

// Module 1510
import useLatestCallbackDefault from "useLatestCallback" /* 1512 */;
import react from "react" /* 19 */;

let closure_1, importDefault;


export const useSyncState = function useSyncState(arg0) {
  let ref;
  let closure_0 = arg0;
  let closure_2 = [];
  let c3 = false;
  let c4 = false;
  let c5 = false;
  const store = {
    getState() {
      let deepFreezeResult;
      const tmp = c3;
      if (tmp) {
        deepFreezeResult = closure_1;
      } else {
        c3 = true;
        const obj = current(dependencyMap[1]);
        deepFreezeResult = obj.deepFreeze(closure_0());
        closure_1 = deepFreezeResult;
      }
      return deepFreezeResult;
    },
    setState(arg0) {
      const obj = current(dependencyMap[1]);
      closure_1 = obj.deepFreeze(arg0);
      if (c4) {
        c5 = true;
      } else {
        const item = closure_2.forEach((fn) => fn());
      }
    },
    batchUpdates(fn) {
      fn();
      c4 = false;
      const tmp2 = c5;
      if (tmp2) {
        c5 = false;
        const item = closure_2.forEach((fn) => fn());
      }
    },
    subscribe(arg0) {
      closure_0 = arg0;
      closure_2.push(arg0);
      return () => {
        const index = closure_2.indexOf(closure_0);
        if (index > -1) {
          closure_2.splice(index, 1);
        }
      };
    }
  };
  let current = react.useRef(store).current;
  const syncExternalStore = react.useSyncExternalStore(current.subscribe, current.getState, current.getState);
  const debugValue = react.useDebugValue(syncExternalStore);
  importDefault = react.useRef([]);
  const tmp3 = useLatestCallbackDefault((arg0) => {
    current = ref.current;
    current.push(arg0);
  });
  let obj = {
    state: syncExternalStore,
    getState: current.getState,
    setState: current.setState,
    scheduleUpdate: tmp3,
    flushUpdates: useLatestCallbackDefault(() => {
      current = ref.current;
      ref.current = [];
      if (0 !== current.length) {
        current.batchUpdates(() => {
          const reversed = current.reverse();
          for (const item10007 of current) {
            let item10007Result = item10007();
            continue;
          }
        });
      }
    })
  };
  return obj;
};