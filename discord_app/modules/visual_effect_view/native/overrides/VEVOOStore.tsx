// === Module 4966: VEVOOStore ===

// Module 4966 (VEVOOStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let closure_2 = {};
const state = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

export const useVisualEffectViewOverrides = function useVisualEffectViewOverrides() {
  return state();
};
export const getVisualEffectViewOverrides = function getVisualEffectViewOverrides() {
  return state.getState();
};
export const setVisualEffectViewOverides = function setVisualEffectViewOverides(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => state.setState(closure_0));
};
export const clearVisualEffectViewOverrides = function clearVisualEffectViewOverrides() {
  ReactBatchUpdates.batchUpdates(() => state.setState(closure_1_2));
};