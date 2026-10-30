// === Module 5596: VEVOOStore ===

// Module 5596 (VEVOOStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1260 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = {};
const state = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

export function useVisualEffectViewOverrides() {
  return state();
}
export function getVisualEffectViewOverrides() {
  return state.getState();
}
export function setVisualEffectViewOverides(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => state.setState(closure_0));
}
export function clearVisualEffectViewOverrides() {
  ReactBatchUpdates.batchUpdates(() => state.setState(closure_1_2));
}