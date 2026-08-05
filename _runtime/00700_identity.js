// _runtime/00700_identity.js
import noop from "noop";

function identity(arg0) {
  return arg0;
}
function createWithEqualityFnImpl(arg0, arg1) {
  const _require = arg1;
  store = _require(store[2]).createStore(arg0);
  function useBoundStoreWithEqualityFn(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = callback;
    }
    let tmp2 = arg0;
    if (arg0 === undefined) {
      tmp2 = outer1_3;
    }
    const syncExternalStoreWithSelector = callback(store[1]).useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
    const debugValue = outer1_2.useDebugValue(syncExternalStoreWithSelector);
    return syncExternalStoreWithSelector;
  }
  const merged = Object.assign(useBoundStoreWithEqualityFn, store);
  return useBoundStoreWithEqualityFn;
}

export const createWithEqualityFn = (arg0, arg1) => {
  if (arg0) {
    if (typeof tmp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _require = arg1;
    store = _require(store[2]).createStore(arg0);
    function useBoundStoreWithEqualityFn(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = callback;
      }
      let tmp2 = arg0;
      if (arg0 === undefined) {
        tmp2 = outer1_3;
      }
      const syncExternalStoreWithSelector = callback(store[1]).useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
      const debugValue = outer1_2.useDebugValue(syncExternalStoreWithSelector);
      return syncExternalStoreWithSelector;
    }
    const _Object = Object;
    const merged = Object.assign(useBoundStoreWithEqualityFn, store);
    let tmp2 = useBoundStoreWithEqualityFn;
    const obj = _require(store[2]);
  } else {
    tmp2 = tmp;
  }
  return tmp2;
};
export const useStoreWithEqualityFn = function useStoreWithEqualityFn(closure_4, arg1, shallow) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = identity;
  }
  const syncExternalStoreWithSelector = require(701) /* is */.useSyncExternalStoreWithSelector(closure_4.subscribe, closure_4.getState, closure_4.getInitialState, tmp, shallow);
  const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
  return syncExternalStoreWithSelector;
};