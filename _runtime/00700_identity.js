// === Module 700: identity ===

// Module 700 (identity)
import is from "is" /* 701 */;
import noop from "noop" /* 19 */;

function identity(arg0) {
  return arg0;
}
function createWithEqualityFnImpl(arg0, arg1) {
  const _require = arg1;
  store = _require(store[2]).createStore(arg0);
  function useBoundStoreWithEqualityFn(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = shallow;
    }
    let tmp2 = arg0;
    if (arg0 === undefined) {
      tmp2 = identity;
    }
    const syncExternalStoreWithSelector = shallow(store[1]).useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
    const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
    return syncExternalStoreWithSelector;
  }
  const merged = Object.assign(useBoundStoreWithEqualityFn, store);
  return useBoundStoreWithEqualityFn;
}

export const createWithEqualityFn = (arg0, shallow) => {
  if (arg0) {
    if (typeof createWithEqualityFnImpl !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const _require = shallow;
    store = _require(store[2]).createStore(arg0);
    function useBoundStoreWithEqualityFn(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = shallow;
      }
      let tmp2 = arg0;
      if (arg0 === undefined) {
        tmp2 = identity;
      }
      const syncExternalStoreWithSelector = shallow(store[1]).useSyncExternalStoreWithSelector(store.subscribe, store.getState, store.getInitialState, tmp2, tmp);
      const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
      return syncExternalStoreWithSelector;
    }
    const _Object = Object;
    const merged = Object.assign(useBoundStoreWithEqualityFn, store);
    let tmp2 = useBoundStoreWithEqualityFn;
    const obj = _require(store[2]);
  } else {
    tmp2 = createWithEqualityFnImpl;
  }
  return tmp2;
};
export const useStoreWithEqualityFn = function useStoreWithEqualityFn(closure_4, arg1, shallow) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = identity;
  }
  const syncExternalStoreWithSelector = is.useSyncExternalStoreWithSelector(createWithEqualityFnImpl.subscribe, createWithEqualityFnImpl.getState, createWithEqualityFnImpl.getInitialState, tmp, shallow);
  const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
  return syncExternalStoreWithSelector;
};