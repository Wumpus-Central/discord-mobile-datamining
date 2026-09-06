// _runtime/00562_keys1.js
import noop from "metro/00019__.js";

function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(561).createStore(arg0);
  function useBoundStore(arg0) {
    let tmp = arg0;
    closure_0 = store;
    if (arg0 === undefined) {
      tmp = identity;
    }
    closure_1 = tmp;
    const items = [store, tmp];
    const items1 = [store, tmp];
    const callback = noop.useCallback(() => closure_1(closure_0.getState()), items);
    const syncExternalStore = noop.useSyncExternalStore(
      tmp2.subscribe,
      callback,
      noop.useCallback(() => closure_1(closure_0.getInitialState()), items1),
    );
    const debugValue = noop.useDebugValue(syncExternalStore);
    return syncExternalStore;
  }
  const merged = Object.assign(useBoundStore, store);
  return useBoundStore;
}

export const create = (arg0) => {
  if (arg0) {
    if (typeof tmp === "function") {
      store = store(561).createStore(arg0);
      function useBoundStore(arg0) {
        let tmp = arg0;
        closure_0 = store;
        if (arg0 === undefined) {
          tmp = identity;
        }
        closure_1 = tmp;
        const items = [store, tmp];
        const items1 = [store, tmp];
        const callback = noop.useCallback(() => closure_1(closure_0.getState()), items);
        const syncExternalStore = noop.useSyncExternalStore(
          tmp2.subscribe,
          callback,
          noop.useCallback(() => closure_1(closure_0.getInitialState()), items1),
        );
        const debugValue = noop.useDebugValue(syncExternalStore);
        return syncExternalStore;
      }
      const _Object = Object;
      const merged = Object.assign(useBoundStore, store);
      let tmp2 = useBoundStore;
      const obj = store(561);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    tmp2 = tmp;
  }
  return tmp2;
};
export const useStore = function useStore(subscribe) {
  closure_0 = subscribe;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = identity;
  }
  closure_1 = tmp;
  const items = [subscribe, tmp];
  const items1 = [subscribe, tmp];
  const callback = noop.useCallback(() => closure_1(closure_0.getState()), items);
  const syncExternalStore = noop.useSyncExternalStore(
    subscribe.subscribe,
    callback,
    noop.useCallback(() => closure_1(closure_0.getInitialState()), items1),
  );
  const debugValue = noop.useDebugValue(syncExternalStore);
  return syncExternalStore;
};
