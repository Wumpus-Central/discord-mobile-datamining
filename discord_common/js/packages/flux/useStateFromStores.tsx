// discord_common/js/packages/flux/useStateFromStores.tsx
import shallowEqual from "../shallow-equal/shallowEqual.tsx";
import shallowEqualDefault from "../shallow-equal/shallowEqual.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { shallowEqual } from "../shallow-equal/shallowEqual.tsx";

require = arg1;
function defaultAreStatesEqual(arg0, arg1) {
  return arg0 === arg1;
}
function useStateFromStores(items, getCurrentRestrictedHoursState, items1, isVersionEqual) {
  const _require = items;
  closure_1 = getCurrentRestrictedHoursState;
  dependencyMap = items1;
  let tmp = isVersionEqual;
  if (isVersionEqual === undefined) {
    tmp = defaultAreStatesEqual;
  }
  const callback = tmp;
  let current;
  let callback2;
  let callback3;
  const tmp2 = callback2(null);
  if (null == tmp2.current) {
    const obj = { stores: null, areStatesEqual: null, getStateFromStores: null, prevDeps: "Boolean", state: "call" };
    obj[0] = items;
    obj[1] = tmp;
    obj[2] = getCurrentRestrictedHoursState;
    tmp2.current = obj;
  }
  current = tmp2.current;
  const state = current.state;
  callback2 = state;
  if (null == items1) {
    const tmp6 = getCurrentRestrictedHoursState();
    let tmp5 = state;
    if (!tmp7) {
      callback2 = tmp6;
      tmp5 = tmp6;
    }
    tmp7 = null != state && tmp(state, tmp6);
  } else {
    tmp5 = state;
    const obj2 = shallowEqual;
  }
  callback3(() => {
    current.getStateFromStores = closure_1;
    current.prevDeps = closure_2;
    current.state = closure_5;
  });
  callback3 = callback(current(null), 2)[1];
  callback3(() => {
    batchedStoreListener = new items(items1[3]).BatchedStoreListener(batchedStoreListener, () => {
      stateFromStores = stateFromStores.getStateFromStores();
      if (!callback(stateFromStores.state, stateFromStores)) {
        stateFromStores.state = stateFromStores;
        callback2({});
      }
    });
    batchedStoreListener.attach("useStateFromStores");
    return () => batchedStoreListener.detach();
  }, []);
  return tmp5;
}
({ useState: c4, useRef: c5, useInsertionEffect: closure_6 } = noop);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStores.tsx");

export function statesWillNeverBeEqual() {
  return false;
}
export { useStateFromStores };
export const useStateFromStoresObject = function useStateFromStoresObject(
  items,
  getCurrentRestrictedHoursState,
  items1,
) {
  return useStateFromStores(items, getCurrentRestrictedHoursState, items1, shallowEqualDefault);
};
export const useStateFromStoresArray = function useStateFromStoresArray(items, getCurrentRestrictedHoursState, items1) {
  return useStateFromStores(items, getCurrentRestrictedHoursState, items1, shallowEqual.areArraysShallowEqual);
};
