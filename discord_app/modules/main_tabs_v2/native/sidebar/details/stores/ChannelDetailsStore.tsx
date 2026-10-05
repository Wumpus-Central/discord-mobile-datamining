// === Module 7511: ChannelDetailsStore ===

// Module 7511 (ChannelDetailsStore)
import react from "react" /* 576 */;
import react_native from "react-native" /* 1259 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map, setState;

let closure_2 = { isSearchActive: false, searchActiveSource: "initial" };
const useChannelDetailsStore = module_570.create(() => {
  const obj = { states: new Map() };
  new Map();
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === arg0) {
    let tmp2;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
    }
    return obj(tmp2);
  }
  const fn = function s(states) {
    states = states.states;
    let value = states.get(closure_0);
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
}) : ((arg0, arg1) => {
  let obj;
  let closure_0 = arg0;
  let closure_1 = arg1;
  return obj((states) => {
    states = states.states;
    let value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(closure_2);
      value = obj;
    }
    return closure_1(value);
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isSearchActive) {
      return isSearchActive.isSearchActive;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(arg0, first);
}) : ((arg0) => closure_4(arg0, (isSearchActive) => isSearchActive.isSearchActive));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(searchActiveSource) {
      return searchActiveSource.searchActiveSource;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_4(arg0, first);
}) : ((arg0) => closure_4(arg0, (searchActiveSource) => searchActiveSource.searchActiveSource));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx");

export { useChannelDetailsStore };
export const deleteChannelStates = function deleteChannelStates() {
  let obj = react_native;
  obj.batchUpdates(() => {
    setState = setState.setState;
    const obj = { states: new Map() };
    new Map();
    return setState(obj);
  });
};
export const useIsChannelDetailsSearchActive = tmp3;
export const useChannelDetailsSearchActiveSource = tmp4;
export const setIsChannelDetailsSearchActive = function setIsChannelDetailsSearchActive(arg0, isSearchActive, searchActiveSource) {
  let obj = { isSearchActive, searchActiveSource };
  const states = obj.getState().states;
  let value = states.get(arg0);
  if (value == null) {
    const obj2 = {};
    const merged = Object.assign(closure_2);
    value = obj2;
  }
  const obj3 = {};
  const merged1 = Object.assign(value);
  const merged2 = Object.assign(obj);
  map = new Map(states);
  const result = map.set(arg0, obj3);
  const obj5 = map(1259);
  obj5.batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
};
export const getIsChannelDetailsSearchActive = function getIsChannelDetailsSearchActive(arg0) {
  let obj;
  const states = obj.getState().states;
  let value = states.get(arg0);
  if (value == null) {
    obj = {};
    const merged = Object.assign(closure_2);
    value = obj;
  }
  return value.isSearchActive;
};
export const deleteChannelDetailsSearchState = function deleteChannelDetailsSearchState(arg0) {
  let obj;
  const states = obj.getState().states;
  states.delete(arg0);
  map = new Map(states);
  obj = map(1259);
  obj.batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
};