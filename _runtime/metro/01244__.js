// === Module 1244: ? ===

// Module 1244
import is from "is" /* 1245 */;
import noop from "module_19" /* 19 */;

function identity(arg0) {
  return arg0;
}
function createWithEqualityFnImpl(arg0, arg1) {
  _require = arg1;
  store = require("module_561").createStore(arg0);
  function useBoundStoreWithEqualityFn(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = closure_0;
    }
    let tmp2 = arg0;
    if (arg0 === undefined) {
      tmp2 = identity;
    }
    const syncExternalStoreWithSelector = is.useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
    const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
    return syncExternalStoreWithSelector;
  }
  const merged = Object.assign(useBoundStoreWithEqualityFn, store);
  return useBoundStoreWithEqualityFn;
}

export const createWithEqualityFn = (arg0, shallow) => {
  if (arg0) {
    if (typeof createWithEqualityFnImpl === "function") {
      _require = shallow;
      store = require("module_561").createStore(arg0);
      function useBoundStoreWithEqualityFn(arg0) {
        let tmp = arg1;
        if (arg1 === undefined) {
          tmp = closure_0;
        }
        let tmp2 = arg0;
        if (arg0 === undefined) {
          tmp2 = identity;
        }
        const syncExternalStoreWithSelector = is.useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
        const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
        return syncExternalStoreWithSelector;
      }
      const _Object = Object;
      const merged = Object.assign(useBoundStoreWithEqualityFn, store);
      let tmp2 = useBoundStoreWithEqualityFn;
      const obj = require("module_561");
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    tmp2 = createWithEqualityFnImpl;
  }
  return tmp2;
};
export const useStoreWithEqualityFn = function useStoreWithEqualityFn(subscribe, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = identity;
  }
  const syncExternalStoreWithSelector = is.useSyncExternalStoreWithSelector(subscribe.subscribe, subscribe.getState, subscribe.getInitialState, tmp, shallow);
  const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
  return syncExternalStoreWithSelector;
};