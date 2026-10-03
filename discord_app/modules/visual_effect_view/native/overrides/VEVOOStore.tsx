// === Module 5774: VEVOOStore ===

// Module 5774 (VEVOOStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = {};
const state = module_570.create(() => closure_2);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

export const useVisualEffectViewOverrides = () => state();
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