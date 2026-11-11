// === Module 5120: FluxApi ===

// Module 5120 (FluxApi)
import shim_mod from "js_shim/shim" /* 1363 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export function hasFluxApi() {
  return null != shim;
}