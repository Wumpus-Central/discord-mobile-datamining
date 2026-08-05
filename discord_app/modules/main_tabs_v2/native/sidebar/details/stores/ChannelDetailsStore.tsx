// discord_app/modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx
import keys from "keys";

let closure_2 = { isSearchActive: false, searchActiveSource: "initial" };
let obj = keys.create(() => {
  const obj = { states: null };
  obj[0] = new Map();
  return obj;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx");

export const useChannelDetailsStore = obj;
export const deleteChannelStates = function deleteChannelStates() {
  require(705) /* batchUpdates */.batchUpdates(() => {
    const obj = { states: null };
    obj[0] = new Map();
    return state.setState(obj);
  });
};
export const useIsChannelDetailsSearchActive = function useIsChannelDetailsSearchActive(arg0) {
  let closure_0 = arg0;
  const f80290 = (isSearchActive) => isSearchActive.isSearchActive;
  return obj((states) => {
    states = states.states;
    let value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(outer1_2);
      value = obj;
    }
    return f80291(value);
  });
};
export const useChannelDetailsSearchActiveSource = function useChannelDetailsSearchActiveSource(arg0) {
  let closure_0 = arg0;
  const f80291 = (searchActiveSource) => searchActiveSource.searchActiveSource;
  return obj((states) => {
    states = states.states;
    let value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(outer1_2);
      value = obj;
    }
    return f80291(value);
  });
};
export const setIsChannelDetailsSearchActive = function setIsChannelDetailsSearchActive(arg0, isSearchActive, searchActiveSource) {
  let obj = { isSearchActive, searchActiveSource };
  const states = obj.getState().states;
  let value = states.get(arg0);
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
  map(705).batchUpdates(() => outer1_3.setState({ states: map }));
};
export const getIsChannelDetailsSearchActive = function getIsChannelDetailsSearchActive(arg0) {
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
  const states = obj.getState().states;
  states.delete(arg0);
  const map = new Map(states);
  obj = map(705);
  obj.batchUpdates(() => outer1_3.setState({ states: map }));
};