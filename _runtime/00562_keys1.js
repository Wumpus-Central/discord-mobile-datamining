// _runtime/00562_keys1.js
import closure_2 from "00019_noop.js";

function identity(arg0) {
  return arg0;
}
function createImpl(arg0) {
  store = store(561).createStore(arg0);
  function useBoundStore(arg0) {
    let tmp = arg0;
    if (arg0 === undefined) {
      tmp = closure_1_3;
    }
    closure_1 = tmp;
    const items = [closure_0, tmp];
    const items1 = [closure_0, tmp];
    const callback = closure_1_2.useCallback(() => callback(store.getState()), items);
    const syncExternalStore = closure_1_2.useSyncExternalStore(
      tmp2.subscribe,
      callback,
      closure_1_2.useCallback(() => callback(store.getInitialState()), items1),
    );
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
    store = store(561).createStore(arg0);
    function useBoundStore(arg0) {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = closure_1_3;
      }
      closure_1 = tmp;
      const items = [closure_0, tmp];
      const items1 = [closure_0, tmp];
      const callback = closure_1_2.useCallback(() => callback(store.getState()), items);
      const syncExternalStore = closure_1_2.useSyncExternalStore(
        tmp2.subscribe,
        callback,
        closure_1_2.useCallback(() => callback(store.getInitialState()), items1),
      );
      const debugValue = closure_1_2.useDebugValue(syncExternalStore);
      return syncExternalStore;
    }
    const _Object = Object;
    const merged = Object.assign(useBoundStore, store);
    let tmp2 = useBoundStore;
    const obj = store(561);
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
  const callback = React.useCallback(() => callback(store.getState()), items);
  const syncExternalStore = React.useSyncExternalStore(
    subscribe.subscribe,
    callback,
    React.useCallback(() => callback(store.getInitialState()), items1),
  );
  const debugValue = React.useDebugValue(syncExternalStore);
  return syncExternalStore;
};
