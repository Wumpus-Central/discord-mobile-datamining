// discord_app/modules/visual_effect_view/native/overrides/VEVOOStore.tsx
import ReactBatchUpdates from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import 00560__ from "../../../../../_runtime/metro/00560__.js";
import size from "../../../../../_runtime/metro/00002__.js";

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