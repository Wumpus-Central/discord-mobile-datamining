// === Module 1254: ? ===

// Module 1254
import react2 from "react" /* 1255 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require;

function identity(arg0) {
  return arg0;
}
function createWithEqualityFnImpl(arg0, arg1) {
  let closure_0;
  let store;
  _require = arg1;
  const obj = require("module_571");
  store = obj.createStore(arg0);
  function useBoundStoreWithEqualityFn(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = shallow;
    }
    let tmp2 = arg0;
    if (arg0 === undefined) {
      tmp2 = identity;
    }
    const obj = react2;
    const syncExternalStoreWithSelector = obj.useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
    const debugValue = react.useDebugValue(syncExternalStoreWithSelector);
    return syncExternalStoreWithSelector;
  }
  const merged = Object.assign(useBoundStoreWithEqualityFn, store);
  return useBoundStoreWithEqualityFn;
}

export const createWithEqualityFn = (arg0, shallow) => {
  let store;
  let tmp2;
  if (arg0) {
    if (typeof createWithEqualityFnImpl === "function") {
      _require = shallow;
      let obj = require("module_571");
      store = obj.createStore(arg0);
      function useBoundStoreWithEqualityFn(arg0) {
        let tmp = arg1;
        if (arg1 === undefined) {
          tmp = shallow;
        }
        let tmp2 = arg0;
        if (arg0 === undefined) {
          tmp2 = identity;
        }
        const obj = react2;
        const syncExternalStoreWithSelector = obj.useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
        const debugValue = react.useDebugValue(syncExternalStoreWithSelector);
        return syncExternalStoreWithSelector;
      }
      const _Object = Object;
      const merged = Object.assign(useBoundStoreWithEqualityFn, store);
      tmp2 = useBoundStoreWithEqualityFn;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    tmp2 = createWithEqualityFnImpl;
  }
  return tmp2;
};
export const useStoreWithEqualityFn = function useStoreWithEqualityFn(context) {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = identity;
  }
  const obj = react2;
  const syncExternalStoreWithSelector = obj.useSyncExternalStoreWithSelector(context.subscribe, context.getState, context.getInitialState, tmp, shallow);
  const debugValue = react.useDebugValue(syncExternalStoreWithSelector);
  return syncExternalStoreWithSelector;
};