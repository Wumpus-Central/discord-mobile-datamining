// _runtime/01355_keys1.js
import noop from "00019_noop.js";

function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(1354).createStore(arg0);
  function useBoundStore(arg0) {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = identity;
    }
    closure_1 = tmp;
    const syncExternalStore = noop.useSyncExternalStore(closure_0.subscribe, () => callback(store.getState()), () => callback(store.getInitialState()));
    const debugValue = noop.useDebugValue(syncExternalStore);
    return syncExternalStore;
  }
  const merged = Object.assign(useBoundStore, store);
  return useBoundStore;
}

export const create = (arg0) => {
  if (arg0) {
    if (typeof createImpl !== "function") {
      HermesBuiltin.throwTypeError();
    }
    store = store(1354).createStore(arg0);
    function useBoundStore(arg0) {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = identity;
      }
      closure_1 = tmp;
      const syncExternalStore = noop.useSyncExternalStore(closure_0.subscribe, () => callback(store.getState()), () => callback(store.getInitialState()));
      const debugValue = noop.useDebugValue(syncExternalStore);
      return syncExternalStore;
    }
    const _Object = Object;
    const merged = Object.assign(useBoundStore, store);
    let tmp2 = useBoundStore;
    const obj = store(1354);
  } else {
    tmp2 = createImpl;
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
  const syncExternalStore = noop.useSyncExternalStore(subscribe.subscribe, () => callback(store.getState()), () => callback(store.getInitialState()));
  const debugValue = noop.useDebugValue(syncExternalStore);
  return syncExternalStore;
};