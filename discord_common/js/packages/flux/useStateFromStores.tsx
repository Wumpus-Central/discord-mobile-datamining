import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c4;
let c5;
let closure_6;
const require = arg1;
function defaultAreStatesEqual(arg0, arg1) {
  return arg0 === arg1;
}
function useStateFromStores(items, getCurrentRestrictedHoursState, items1, isVersionEqual) {
  const _require = items;
  let closure_1 = getCurrentRestrictedHoursState;
  const dependencyMap = items1;
  let tmp = isVersionEqual;
  if (isVersionEqual === undefined) {
    tmp = defaultAreStatesEqual;
  }
  const callback = tmp;
  let current;
  let state;
  let callback2;
  const tmp2 = state(null);
  if (null == tmp2.current) {
    const obj = { stores: null, areStatesEqual: null, getStateFromStores: null, prevDeps: "Boolean", state: "ti" };
    obj[0] = items;
    obj[1] = tmp;
    obj[2] = getCurrentRestrictedHoursState;
    tmp2.current = obj;
  }
  current = tmp2.current;
  state = current.state;
  if (null == items1) {
    const tmp6 = getCurrentRestrictedHoursState();
    let tmp5 = state;
    if (!tmp7) {
      state = tmp6;
      tmp5 = tmp6;
    }
    tmp7 = null != state && tmp(state, tmp6);
  } else {
    tmp5 = state;
    const obj2 = _require(643);
  }
  callback2(() => {
    current.getStateFromStores = closure_1;
    current.prevDeps = closure_2;
    current.state = state;
  });
  callback2 = callback(current(null), 2)[1];
  callback2(() => {
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
const result = require("shallowEqual").fileFinishedImporting("../discord_common/js/packages/flux/useStateFromStores.tsx");

export function statesWillNeverBeEqual() {
  return false;
}
export { useStateFromStores };
export const useStateFromStoresObject = function useStateFromStoresObject(items, getCurrentRestrictedHoursState, items1) {
  return useStateFromStores(items, getCurrentRestrictedHoursState, items1, importDefault(643));
};
export const useStateFromStoresArray = function useStateFromStoresArray(items, getCurrentRestrictedHoursState, items1) {
  return useStateFromStores(items, getCurrentRestrictedHoursState, items1, require(643) /* shallowEqual */.areArraysShallowEqual);
};