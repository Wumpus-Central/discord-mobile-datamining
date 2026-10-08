// discord_common/js/packages/flux/useStateFromStores.tsx
import discord_common_shallowEqual from "../shallow-equal/shallowEqual.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const discord_common_shallowEqualDefault = discord_common_shallowEqual;

require = fn;
function defaultAreStatesEqual(arg0, arg1) {
  return arg0 === arg1;
}
function useStateFromStores(items, cResult, items1) {
  _require = items;
  const getStateFromStores = cResult;
  dependencyMap = items1;
  let tmp = isVersionEqual;
  if (isVersionEqual === undefined) {
    tmp = defaultAreStatesEqual;
  }
  _slicedToArray = tmp;
  let current;
  state = undefined;
  closure_6 = undefined;
  const tmp2 = state(null);
  if (null == tmp2.current) {
    const obj = { stores: items, areStatesEqual: tmp, getStateFromStores: cResult, prevDeps: "Boolean", state: "code" };
    tmp2.current = obj;
  }
  current = tmp2.current;
  state = current.state;
  if (null == items1) {
    const tmp6 = cResult();
    let tmp5 = state;
    if (!tmp7) {
      state = tmp6;
      tmp5 = tmp6;
    }
    tmp7 = null != state && tmp(state, tmp6);
  } else {
    tmp5 = state;
    const obj2 = require("discord_common/shallowEqual");
  }
  closure_6(() => {
    current.getStateFromStores = getStateFromStores;
    current.prevDeps = prevDeps;
    current.state = state;
  });
  closure_6 = _slicedToArray(current(null), 2)[1];
  closure_6(() => {
    batchedStoreListener = new items(prevDeps[3]).BatchedStoreListener(batchedStoreListener, function updateState() {
      stateFromStores = stateFromStores.getStateFromStores();
      if (!closure_1_3(stateFromStores.state, stateFromStores)) {
        tmp.state = stateFromStores;
        closure_1_6({});
      }
      tmp = stateFromStores;
    });
    batchedStoreListener.attach("useStateFromStores");
    return () => batchedStoreListener.detach();
  }, []);
  return tmp5;
}
const noop = fn(19);
({ useState: closure_4, useRef: hasOwnProperty, useInsertionEffect: metroRequire } = noop);
let ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result2 = size.fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStores.tsx");

export function statesWillNeverBeEqual() {
  return false;
}
export { useStateFromStores };
export const useStateFromStoresObject = function useStateFromStoresObject(items, cResult, items1) {
  return useStateFromStores(items, cResult, items1, discord_common_shallowEqualDefault);
};
export const useStateFromStoresArray = function useStateFromStoresArray(items, cResult, items1) {
  return useStateFromStores(items, cResult, items1, discord_common_shallowEqual.areArraysShallowEqual);
};
