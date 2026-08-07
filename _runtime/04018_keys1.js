// _runtime/04018_keys1.js
import noop from "noop";

function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(4017).createStore(arg0);
  function useBoundStore(arg0) {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = outer1_3;
    }
    let closure_1 = tmp;
    const syncExternalStore = outer1_2.useSyncExternalStore(closure_0.subscribe, () => tmp(store.getState()), () => tmp(store.getInitialState()));
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
    store = store(4017).createStore(arg0);
    function useBoundStore(arg0) {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = outer1_3;
      }
      let closure_1 = tmp;
      const syncExternalStore = outer1_2.useSyncExternalStore(closure_0.subscribe, () => tmp(store.getState()), () => tmp(store.getInitialState()));
      const debugValue = outer1_2.useDebugValue(syncExternalStore);
      return syncExternalStore;
    }
    const _Object = Object;
    const merged = Object.assign(useBoundStore, store);
    let tmp2 = useBoundStore;
    const obj = store(4017);
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
  const syncExternalStore = noop.useSyncExternalStore(subscribe.subscribe, () => tmp(store.getState()), () => tmp(store.getInitialState()));
  const debugValue = noop.useDebugValue(syncExternalStore);
  return syncExternalStore;
};