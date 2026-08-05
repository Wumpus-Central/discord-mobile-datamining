// _runtime/00646_keys1.js
import noop from "noop";

function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(645).createStore(arg0);
  function useBoundStore(arg0) {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = outer1_3;
    }
    let closure_1 = tmp;
    const items = [closure_0, tmp];
    const items1 = [closure_0, tmp];
    const callback = outer1_2.useCallback(() => tmp(store.getState()), items);
    const syncExternalStore = outer1_2.useSyncExternalStore(tmp2.subscribe, callback, outer1_2.useCallback(() => tmp(store.getInitialState()), items1));
    const debugValue = outer1_2.useDebugValue(syncExternalStore);
    return syncExternalStore;
  }
  const merged = Object.assign(useBoundStore, store);
  return useBoundStore;
}

export const create = (arg0) => {
  if (arg0) {
    if (typeof tmp !== "function") {
      HermesBuiltin.throwTypeError();
    }
    store = store(645).createStore(arg0);
    function useBoundStore(arg0) {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = outer1_3;
      }
      let closure_1 = tmp;
      const items = [closure_0, tmp];
      const items1 = [closure_0, tmp];
      const callback = outer1_2.useCallback(() => tmp(store.getState()), items);
      const syncExternalStore = outer1_2.useSyncExternalStore(tmp2.subscribe, callback, outer1_2.useCallback(() => tmp(store.getInitialState()), items1));
      const debugValue = outer1_2.useDebugValue(syncExternalStore);
      return syncExternalStore;
    }
    const _Object = Object;
    const merged = Object.assign(useBoundStore, store);
    let tmp2 = useBoundStore;
    const obj = store(645);
  } else {
    tmp2 = tmp;
  }
  return tmp2;
};
export const useStore = function useStore(subscribe) {
  let closure_0 = subscribe;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = identity;
  }
  const dependencyMap = tmp;
  const items = [subscribe, tmp];
  const items1 = [subscribe, tmp];
  const callback = noop.useCallback(() => tmp(store.getState()), items);
  const syncExternalStore = noop.useSyncExternalStore(subscribe.subscribe, callback, noop.useCallback(() => tmp(store.getInitialState()), items1));
  const debugValue = noop.useDebugValue(syncExternalStore);
  return syncExternalStore;
};