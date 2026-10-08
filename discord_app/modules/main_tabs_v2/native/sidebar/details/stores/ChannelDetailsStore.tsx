// === Module 9245: ChannelDetailsStore ===

// Module 9245 (ChannelDetailsStore)
import c from "c" /* 576 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1271 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = { isSearchActive: false, searchActiveSource: "initial" };
const useChannelDetailsStore = module_570.create(() => {
  const obj = { states: new Map() };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelState(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("c");
  const cResult = obj.c(3);
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp2 = cResult[2];
    }
    return obj(tmp2);
  }
  const fn = function c(states) {
    states = states.states;
    value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(closure_2);
      value = obj;
    }
    return closure_1(value);
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
}) : (function useChannelState(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return obj((states) => {
    states = states.states;
    value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(closure_2);
      value = obj;
    }
    return closure_1(value);
  });
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsChannelDetailsSearchActive(arg0) {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isSearchActive) {
      return isSearchActive.isSearchActive;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(arg0, first);
}) : (function useIsChannelDetailsSearchActive(arg0) {
  return closure_4(arg0, (isSearchActive) => isSearchActive.isSearchActive);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx");

export { useChannelDetailsStore };
export const deleteChannelStates = function deleteChannelStates() {
  ReactBatchUpdates.batchUpdates(() => {
    const obj = { states: new Map() };
    return state.setState(obj);
  });
};
export const useIsChannelDetailsSearchActive = tmp3;
export const useChannelDetailsSearchActiveSource = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelDetailsSearchActiveSource(arg0) {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(searchActiveSource) {
      return searchActiveSource.searchActiveSource;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(arg0, first);
}) : (function useChannelDetailsSearchActiveSource(arg0) {
  return closure_4(arg0, (searchActiveSource) => searchActiveSource.searchActiveSource);
});
export const setIsChannelDetailsSearchActive = function setIsChannelDetailsSearchActive(arg0, isSearchActive, searchActiveSource) {
  let obj = { isSearchActive, searchActiveSource };
  const states = obj.getState().states;
  value = states.get(arg0);
  if (value == null) {
    const obj2 = {};
    const merged = Object.assign(closure_2);
    value = obj2;
  }
  const merged1 = Object.assign(value);
  const merged2 = Object.assign(obj);
  const map = new Map(states);
  const result = map.set(arg0, {});
  map(1271).batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
  const obj3 = {};
  const obj5 = map(1271);
};
export const getIsChannelDetailsSearchActive = function getIsChannelDetailsSearchActive(arg0) {
  const states = obj.getState().states;
  value = states.get(arg0);
  if (value == null) {
    obj = {};
    const merged = Object.assign(closure_2);
    value = obj;
  }
  return value.isSearchActive;
};
export const deleteChannelDetailsSearchState = function deleteChannelDetailsSearchState(arg0) {
  const states = obj.getState().states;
  states.delete(arg0);
  const map = new Map(states);
  obj = map(1271);
  obj.batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
};