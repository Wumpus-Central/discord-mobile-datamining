// === Module 1355: keys1 ===

// Module 1355 (keys1)
import closure_2 from "noop" /* 19 */;

function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(1354).createStore(arg0);
  function useBoundStore(arg0) {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = closure_1_3;
    }
    closure_1 = tmp;
    const syncExternalStore = closure_1_2.useSyncExternalStore(closure_0.subscribe, () => callback(store.getState()), () => callback(store.getInitialState()));
    const debugValue = closure_1_2.useDebugValue(syncExternalStore);
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
    store = store(1354).createStore(arg0);
    function useBoundStore(arg0) {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = closure_1_3;
      }
      closure_1 = tmp;
      const syncExternalStore = closure_1_2.useSyncExternalStore(closure_0.subscribe, () => callback(store.getState()), () => callback(store.getInitialState()));
      const debugValue = closure_1_2.useDebugValue(syncExternalStore);
      return syncExternalStore;
    }
    const _Object = Object;
    const merged = Object.assign(useBoundStore, store);
    let tmp2 = useBoundStore;
    const obj = store(1354);
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
  const syncExternalStore = closure_2.useSyncExternalStore(subscribe.subscribe, () => callback(store.getState()), () => callback(store.getInitialState()));
  const debugValue = closure_2.useDebugValue(syncExternalStore);
  return syncExternalStore;
};