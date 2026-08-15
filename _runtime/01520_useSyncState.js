// _runtime/01520_useSyncState.js
import noop from "noop";
import { useEffect } from "01522_useEffect.js";

const require = arg1;

export const useSyncState = function useSyncState(arg0) {
  let current = arg0;
  let importDefault;
  const dependencyMap = [];
  const React = false;
  let c4 = false;
  let c5 = false;
  let obj = {
    getState() {
      if (c3) {
        let deepFreezeResult = closure_1;
      } else {
        c3 = true;
        deepFreezeResult = current(arr[1]).deepFreeze(current());
        closure_1 = deepFreezeResult;
        const obj = current(arr[1]);
      }
      return deepFreezeResult;
    },
    setState(arg0) {
      let closure_1 = current(arr[1]).deepFreeze(arg0);
      if (c4) {
        let c5 = true;
      } else {
        const item = arr.forEach((arg0) => arg0());
      }
    },
    batchUpdates(arg0) {
      let c4 = true;
      arg0();
      c4 = false;
      if (c5) {
        c5 = false;
        const item = arr.forEach((arg0) => arg0());
      }
    },
    subscribe(arg0) {
      let closure_0 = arg0;
      return () => {
        const index = outer1_2.indexOf(closure_0);
        if (index > -1) {
          outer1_2.splice(index, 1);
        }
      };
    }
  };
  current = React.useRef(obj).current;
  const syncExternalStore = React.useSyncExternalStore(current.subscribe, current.getState, current.getState);
  const debugValue = React.useDebugValue(syncExternalStore);
  importDefault = React.useRef([]);
  obj = {
    state: syncExternalStore,
    getState: current.getState,
    setState: current.setState,
    scheduleUpdate: useEffect((arg0) => {
      const current = ref.current;
      current.push(arg0);
    }),
    flushUpdates: useEffect(() => {
      const current = ref.current;
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