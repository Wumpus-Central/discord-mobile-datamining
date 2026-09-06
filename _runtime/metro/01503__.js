// === Module 1503: ? ===

// Module 1503
import deepFreeze from "deepFreeze" /* 1504 */;
import _modDef1505 from "module_1505" /* 1505 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useSyncState = function useSyncState(arg0) {
  closure_129_0 = arg0;
  closure_129_1 = undefined;
  closure_129_2 = [];
  closure_129_3 = false;
  closure_129_4 = false;
  closure_129_5 = false;
  const store = {
    getState() {
      if (c3) {
        let deepFreezeResult = closure_1;
      } else {
        c3 = true;
        deepFreezeResult = deepFreeze.deepFreeze(current());
        closure_1 = deepFreezeResult;
      }
      return deepFreezeResult;
    },
    setState(arg0) {
      closure_1 = deepFreeze.deepFreeze(arg0);
      if (c4) {
        c5 = true;
      } else {
        const item = dependencyMap.forEach((fn) => fn());
      }
    },
    batchUpdates(fn) {
      fn();
      c4 = false;
      if (c5) {
        c5 = false;
        const item = dependencyMap.forEach((fn) => fn());
      }
    },
    subscribe(arg0) {
      closure_0 = arg0;
      closure_2.push(arg0);
      return () => {
        const index = dependencyMap.indexOf(closure_0);
        if (index > -1) {
          dependencyMap.splice(index, 1);
        }
      };
    }
  };
  let current = noop.useRef(store).current;
  const syncExternalStore = noop.useSyncExternalStore(current.subscribe, current.getState, current.getState);
  const debugValue = noop.useDebugValue(syncExternalStore);
  importDefault = noop.useRef([]);
  const tmp3 = _modDef1505((arg0) => {
    current = ref.current;
    current.push(arg0);
  });
  return {
    state: syncExternalStore,
    getState: current.getState,
    setState: current.setState,
    scheduleUpdate: _modDef1505((arg0) => {
      current = ref.current;
      current.push(arg0);
    }),
    flushUpdates: _modDef1505(() => {
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
};