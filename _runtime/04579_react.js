// === Module 4579: react ===

// Module 4579 (react)
import react from "react" /* 19 */;

function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  let store;
  const obj = store(4578);
  store = obj.createStore(arg0);
  function useBoundStore(arg0) {
    let tmp = arg0;
    let closure_0 = store;
    if (arg0 === undefined) {
      tmp = identity;
    }
    let closure_1 = tmp;
    const syncExternalStore = react.useSyncExternalStore(store.subscribe, () => closure_1(closure_0.getState()), () => closure_1(closure_0.getInitialState()));
    const debugValue = react.useDebugValue(syncExternalStore);
    return syncExternalStore;
  }
  const merged = Object.assign(useBoundStore, store);
  return useBoundStore;
}

export const create = (arg0) => {
  let store;
  let tmp2;
  if (arg0) {
    if (typeof createImpl === "function") {
      const obj = store(4578);
      store = obj.createStore(arg0);
      function useBoundStore(arg0) {
        let tmp = arg0;
        let closure_0 = store;
        if (arg0 === undefined) {
          tmp = identity;
        }
        let closure_1 = tmp;
        const syncExternalStore = react.useSyncExternalStore(store.subscribe, () => closure_1(closure_0.getState()), () => closure_1(closure_0.getInitialState()));
        const debugValue = react.useDebugValue(syncExternalStore);
        return syncExternalStore;
      }
      const _Object = Object;
      const merged = Object.assign(useBoundStore, store);
      tmp2 = useBoundStore;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    tmp2 = createImpl;
  }
  return tmp2;
};
export const useStore = function useStore(subscribe) {
  let closure_0 = subscribe;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = identity;
  }
  let closure_1 = tmp;
  const syncExternalStore = react.useSyncExternalStore(subscribe.subscribe, () => closure_1(closure_0.getState()), () => closure_1(closure_0.getInitialState()));
  const debugValue = react.useDebugValue(syncExternalStore);
  return syncExternalStore;
};