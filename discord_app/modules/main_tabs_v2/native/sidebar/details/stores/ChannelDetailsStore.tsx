// === Module 7876: ChannelDetailsStore ===

// Module 7876 (ChannelDetailsStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let closure_2 = { isSearchActive: false, searchActiveSource: "initial" };
const useChannelDetailsStore = module_560.create(() => {
  const obj = { states: new Map() };
  return obj;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx");

export { useChannelDetailsStore };
export const deleteChannelStates = function deleteChannelStates() {
  ReactBatchUpdates.batchUpdates(() => {
    const obj = { states: new Map() };
    return state.setState(obj);
  });
};
export const useIsChannelDetailsSearchActive = function useIsChannelDetailsSearchActive(arg0) {
  closure_0 = arg0;
  const f82970 = (isSearchActive) => isSearchActive.isSearchActive;
  return obj((states) => {
    states = states.states;
    value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(closure_2);
      value = obj;
    }
    return f82971(value);
  });
};
export const useChannelDetailsSearchActiveSource = function useChannelDetailsSearchActiveSource(arg0) {
  closure_0 = arg0;
  const f82971 = (searchActiveSource) => searchActiveSource.searchActiveSource;
  return obj((states) => {
    states = states.states;
    value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(closure_2);
      value = obj;
    }
    return f82971(value);
  });
};
export const setIsChannelDetailsSearchActive = function setIsChannelDetailsSearchActive(arg0, isSearchActive, searchActiveSource) {
  let obj = { isSearchActive, searchActiveSource };
  const states = obj.getState().states;
  value = states.get(arg0);
  if (value == null) {
    obj = {};
    const merged = Object.assign(closure_2);
    value = obj;
  }
  obj = {};
  const merged1 = Object.assign(value);
  const merged2 = Object.assign(obj);
  const map = new Map(states);
  const result = map.set(arg0, obj);
  map(1249).batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
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
  obj = map(1249);
  obj.batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
};