// === Module 1985: FluxApi ===

// Module 1985 (FluxApi)
import shim from "js_shim/shim" /* 1351 */;
import size from "module_2" /* 2 */;

shim = shim.getFluxApi();
const result = size.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = shim;
export const hasFluxApi = function hasFluxApi() {
  return null != shim;
};