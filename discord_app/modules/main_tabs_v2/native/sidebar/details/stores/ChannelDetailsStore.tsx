// === Module 9804: ChannelDetailsStore ===

// Module 9804 (ChannelDetailsStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1260 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let closure_2 = { isSearchActive: false, searchActiveSource: "initial" };
const useChannelDetailsStore = module_560.create(() => {
  const obj = { states: new Map() };
  return obj;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/stores/ChannelDetailsStore.tsx");

export { useChannelDetailsStore };
export function deleteChannelStates() {
  ReactBatchUpdates.batchUpdates(() => {
    const obj = { states: new Map() };
    return state.setState(obj);
  });
}
export function useIsChannelDetailsSearchActive(arg0) {
  closure_0 = arg0;
  const f95399 = (isSearchActive) => isSearchActive.isSearchActive;
  return obj((states) => {
    states = states.states;
    value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(closure_2);
      value = obj;
    }
    return f95400(value);
  });
}
export function useChannelDetailsSearchActiveSource(arg0) {
  closure_0 = arg0;
  const f95400 = (searchActiveSource) => searchActiveSource.searchActiveSource;
  return obj((states) => {
    states = states.states;
    value = states.get(closure_0);
    if (value == null) {
      const obj = {};
      const merged = Object.assign(closure_2);
      value = obj;
    }
    return f95400(value);
  });
}
export function setIsChannelDetailsSearchActive(arg0, isSearchActive, searchActiveSource) {
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
  map(1260).batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
  const obj3 = {};
  const obj5 = map(1260);
}
export function getIsChannelDetailsSearchActive(arg0) {
  const states = obj.getState().states;
  value = states.get(arg0);
  if (value == null) {
    obj = {};
    const merged = Object.assign(closure_2);
    value = obj;
  }
  return value.isSearchActive;
}
export function deleteChannelDetailsSearchState(arg0) {
  const states = obj.getState().states;
  states.delete(arg0);
  const map = new Map(states);
  obj = map(1260);
  obj.batchUpdates(() => {
    const obj = { states: map };
    return obj.setState(obj);
  });
}