// === Module 1985: FluxApi ===

// Module 1985 (FluxApi)
import shim_mod from "js_shim/shim" /* 1349 */;
import size from "module_2" /* 2 */;

let shim = shim_mod;
shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export const hasFluxApi = function hasFluxApi() {
  return null != shim;
};