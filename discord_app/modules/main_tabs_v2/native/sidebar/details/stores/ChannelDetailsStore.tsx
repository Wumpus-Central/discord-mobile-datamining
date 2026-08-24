// discord_app/modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx
import set from "../../../../../../../_runtime/00002_set.js";
import batchUpdates from "../../../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import keys from "../../../../../../../_runtime/00644_keys.js";

let closure_2 = { isSearchActive: false, searchActiveSource: "initial" };
let obj = keys.create(() => {
  obj = { states: new Map() };
  return obj;
});
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx");

export const useChannelDetailsStore = obj;
export const deleteChannelStates = function deleteChannelStates() {
  batchUpdates.batchUpdates(() => {
    obj = { states: new Map() };
    return state.setState(obj);
  });
};
export const useIsChannelDetailsSearchActive = function useIsChannelDetailsSearchActive(arg0) {
  closure_0 = arg0;
  const f82225 = (isSearchActive) => isSearchActive.isSearchActive;
  return obj((states) => {
    states = states.states;
    let value = states.get(closure_0);
    if (value == null) {
      obj = {};
      const merged = Object.assign(closure_1_2);
      value = obj;
    }
    return f82226(value);
  });
};
export const useChannelDetailsSearchActiveSource = function useChannelDetailsSearchActiveSource(arg0) {
  closure_0 = arg0;
  const f82226 = (searchActiveSource) => searchActiveSource.searchActiveSource;
  return obj((states) => {
    states = states.states;
    let value = states.get(closure_0);
    if (value == null) {
      obj = {};
      const merged = Object.assign(closure_1_2);
      value = obj;
    }
    return f82226(value);
  });
};
export const setIsChannelDetailsSearchActive = function setIsChannelDetailsSearchActive(arg0, isSearchActive, searchActiveSource) {
  obj = { isSearchActive, searchActiveSource };
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
  map(705).batchUpdates(() => closure_1_3.setState({ states: map }));
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
  obj.batchUpdates(() => closure_1_3.setState({ states: map }));
};