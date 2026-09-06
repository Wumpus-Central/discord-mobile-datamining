// discord_app/lib/ZustandStore.tsx
import size from "../../_runtime/metro/00002__.js";

function defaultStatesAreEqual(arg0, arg1) {
  return arg0 === arg1;
}
const result = size.fileFinishedImporting("lib/ZustandStore.tsx");

export const createZustandStore = function createZustandStore(arg0) {
  _require = arg0;
  let obj = require("../../_runtime/metro/01244__.js");
  dependencyMap = obj.createWithEqualityFn(
    require("../../_runtime/metro/04430__.js").subscribeWithSelector((arg0, arg1, arg2) => {
      closure_0 = arg0;
      return closure_0(
        (arg0) => {
          closure_0 = arg0;
          return closure_0(closure_1_1[2]).batchUpdates(() => closure_0(closure_0));
        },
        arg1,
        arg2,
      );
    }),
  );
  function setState(arg0) {
    closure_0 = arg0;
    closure_0(closure_1[2]).batchUpdates(() => state.setState(closure_0));
  }
  const store = {
    useState(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = defaultStatesAreEqual;
      }
      return closure_1(arg0, tmp);
    },
    getState(fn) {
      const state = closure_1.getState();
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
        tmp = defaultStatesAreEqual;
      }
      if (tmp === undefined) {
        tmp = defaultStatesAreEqual;
      }
      return closure_1((arg0) => arg0[closure_0], tmp);
    },
    getField(blocklist) {
      return closure_1.getState()[blocklist];
    },
    subscribe(arg0, arg1, arg2) {
      return closure_1.subscribe(arg0, arg1, arg2);
    },
    setState,
    resetState() {
      if (typeof setState === "function") {
        const initialState = state.getInitialState();
        initialState(state[2]).batchUpdates(() => state.setState(closure_0));
        const obj = initialState(state[2]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    },
  };
  return store;
};
