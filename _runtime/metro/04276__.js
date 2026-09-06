// === Module 4276: ? ===

// Module 4276
import noop from "module_19" /* 19 */;

function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(4275).createStore(arg0);
  function useBoundStore(arg0) {
    let tmp = arg0;
    closure_0 = store;
    if (arg0 === undefined) {
      tmp = identity;
    }
    closure_1 = tmp;
    const syncExternalStore = noop.useSyncExternalStore(store.subscribe, () => closure_1(closure_0.getState()), () => closure_1(closure_0.getInitialState()));
    const debugValue = noop.useDebugValue(syncExternalStore);
    return syncExternalStore;
  }
  const merged = Object.assign(useBoundStore, store);
  return useBoundStore;
}

export const create = (arg0) => {
  if (arg0) {
    if (typeof createImpl === "function") {
      store = store(4275).createStore(arg0);
      function useBoundStore(arg0) {
        let tmp = arg0;
        closure_0 = store;
        if (arg0 === undefined) {
          tmp = identity;
        }
        closure_1 = tmp;
        const syncExternalStore = noop.useSyncExternalStore(store.subscribe, () => closure_1(closure_0.getState()), () => closure_1(closure_0.getInitialState()));
        const debugValue = noop.useDebugValue(syncExternalStore);
        return syncExternalStore;
      }
      const _Object = Object;
      const merged = Object.assign(useBoundStore, store);
      let tmp2 = useBoundStore;
      const obj = store(4275);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
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
  const syncExternalStore = noop.useSyncExternalStore(subscribe.subscribe, () => closure_1(closure_0.getState()), () => closure_1(closure_0.getInitialState()));
  const debugValue = noop.useDebugValue(syncExternalStore);
  return syncExternalStore;
};