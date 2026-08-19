// === Module 646: keys1 ===

// Module 646 (keys1)
import noop from "noop" /* 19 */;

function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(645).createStore(arg0);
  function useBoundStore(arg0) {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = identity;
    }
    closure_1 = tmp;
    const items = [closure_0, tmp];
    const items1 = [closure_0, tmp];
    const callback = noop.useCallback(() => callback(store.getState()), items);
    const syncExternalStore = noop.useSyncExternalStore(tmp2.subscribe, callback, noop.useCallback(() => callback(store.getInitialState()), items1));
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
    store = store(645).createStore(arg0);
    function useBoundStore(arg0) {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = identity;
      }
      closure_1 = tmp;
      const items = [closure_0, tmp];
      const items1 = [closure_0, tmp];
      const callback = noop.useCallback(() => callback(store.getState()), items);
      const syncExternalStore = noop.useSyncExternalStore(tmp2.subscribe, callback, noop.useCallback(() => callback(store.getInitialState()), items1));
      const debugValue = noop.useDebugValue(syncExternalStore);
      return syncExternalStore;
    }
    const _Object = Object;
    const merged = Object.assign(useBoundStore, store);
    let tmp2 = useBoundStore;
    const obj = store(645);
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
  const items = [subscribe, tmp];
  const items1 = [subscribe, tmp];
  const callback = noop.useCallback(() => callback(store.getState()), items);
  const syncExternalStore = noop.useSyncExternalStore(subscribe.subscribe, callback, noop.useCallback(() => callback(store.getInitialState()), items1));
  const debugValue = noop.useDebugValue(syncExternalStore);
  return syncExternalStore;
};