// === Module 4241: defaultStatesAreEqual ===

// Module 4241 (defaultStatesAreEqual)
import obj132 from "obj132" /* 2 */;

function defaultStatesAreEqual(arg0, arg1) {
  return arg0 === arg1;
}
const result = obj132.fileFinishedImporting("lib/ZustandStore.tsx");

export const createZustandStore = function createZustandStore(arg0) {
  const _require = arg0;
  let obj = _require(700);
  dependencyMap = obj.createWithEqualityFn(_require(4242).subscribeWithSelector((arg0, arg1, arg2) => {
    let callback = arg0;
    return callback((arg0) => {
      const callback = arg0;
      return callback(closure_1_1[2]).batchUpdates(() => callback(callback));
    }, arg1, arg2);
  }));
  function setState(arg0) {
    const callback = arg0;
    callback(store[2]).batchUpdates(() => closure_1_1.setState(initialState));
  }
  obj = {
    useState(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = setState;
      }
      return store(arg0, tmp);
    },
    getState(fn) {
      const state = store.getState();
      let tmp2 = state;
      if (null != fn) {
        tmp2 = fn(state);
      }
      return tmp2;
    },
    useField(blocklist) {
      closure_0 = blocklist;
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = setState;
      }
      if (tmp === undefined) {
        tmp = setState;
      }
      return store((arg0) => arg0[closure_0], tmp);
    },
    getField(blocklist) {
      return store.getState()[blocklist];
    },
    subscribe(arg0, arg1, arg2) {
      return store.subscribe(arg0, arg1, arg2);
    },
    setState,
    resetState() {
      const initialState = store.getInitialState();
      if (typeof setState !== "function") {
        HermesBuiltin.throwTypeError();
      }
      callback(store[2]).batchUpdates(() => closure_1_1.setState(initialState));
    }
  };
  return obj;
};