// discord_app/modules/visual_effect_view/native/overrides/VEVOOStore.tsx
import keys from "keys";
import { batchUpdates } from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

let closure_2 = {};
let closure_3 = keys.create(() => closure_2);
const result = require("set").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOStore.tsx");

export const useVisualEffectViewOverrides = function useVisualEffectViewOverrides() {
  return state();
};
export const getVisualEffectViewOverrides = function getVisualEffectViewOverrides() {
  return state.getState();
};
export const setVisualEffectViewOverides = function setVisualEffectViewOverides(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_3.setState(closure_0));
};
export const clearVisualEffectViewOverrides = function clearVisualEffectViewOverrides() {
  batchUpdates.batchUpdates(() => state.setState(closure_2));
};