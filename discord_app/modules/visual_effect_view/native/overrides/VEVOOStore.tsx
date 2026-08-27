// === Module 4871: useVisualEffectViewOverrides ===

// Module 4871 (useVisualEffectViewOverrides)
import set from "set" /* 2 */;
import batchUpdates from "batchUpdates" /* 705 */;
import keys from "keys" /* 644 */;

let closure_2 = {};
let closure_3 = keys.create(() => closure_2);
const result = set.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

export const useVisualEffectViewOverrides = function useVisualEffectViewOverrides() {
  return state();
};
export const getVisualEffectViewOverrides = function getVisualEffectViewOverrides() {
  return state.getState();
};
export const setVisualEffectViewOverides = function setVisualEffectViewOverides(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_3.setState(closure_0));
};
export const clearVisualEffectViewOverrides = function clearVisualEffectViewOverrides() {
  batchUpdates.batchUpdates(() => state.setState(closure_2));
};