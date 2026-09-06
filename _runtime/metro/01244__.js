// _runtime/metro/01244__.js
import is from "../01245_is.js";
import noop from "00019__.js";

function identity(arg0) {
  return arg0;
}
function createWithEqualityFnImpl(arg0, arg1) {
  _require = arg1;
  store = require("00561__.js").createStore(arg0);
  function useBoundStoreWithEqualityFn(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = closure_0;
    }
    let tmp2 = arg0;
    if (arg0 === undefined) {
      tmp2 = identity;
    }
    const syncExternalStoreWithSelector = is.useSyncExternalStoreWithSelector(
      store.subscribe,
      store.getState,
      store.getInitialState,
      tmp2,
      tmp,
    );
    const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
    return syncExternalStoreWithSelector;
  }
  const merged = Object.assign(useBoundStoreWithEqualityFn, store);
  return useBoundStoreWithEqualityFn;
}

export const createWithEqualityFn = (arg0, arg1) => {
  if (arg0) {
    if (typeof tmp === "function") {
      _require = arg1;
      store = require("00561__.js").createStore(arg0);
      function useBoundStoreWithEqualityFn(arg0) {
        let tmp = arg1;
        if (arg1 === undefined) {
          tmp = closure_0;
        }
        let tmp2 = arg0;
        if (arg0 === undefined) {
          tmp2 = identity;
        }
        const syncExternalStoreWithSelector = is.useSyncExternalStoreWithSelector(
          store.subscribe,
          store.getState,
          store.getInitialState,
          tmp2,
          tmp,
        );
        const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
        return syncExternalStoreWithSelector;
      }
      const _Object = Object;
      const merged = Object.assign(useBoundStoreWithEqualityFn, store);
      let tmp2 = useBoundStoreWithEqualityFn;
      const obj = require("00561__.js");
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    tmp2 = tmp;
  }
  return tmp2;
};
export const useStoreWithEqualityFn = function useStoreWithEqualityFn(subscribe, arg1, shallow) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = identity;
  }
  const syncExternalStoreWithSelector = is.useSyncExternalStoreWithSelector(
    subscribe.subscribe,
    subscribe.getState,
    subscribe.getInitialState,
    tmp,
    shallow,
  );
  const debugValue = noop.useDebugValue(syncExternalStoreWithSelector);
  return syncExternalStoreWithSelector;
};
