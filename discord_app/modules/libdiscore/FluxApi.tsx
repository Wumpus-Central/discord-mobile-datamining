// === Module 1868: fluxApi ===

// Module 1868 (fluxApi)
import isBlockedDomain from "isBlockedDomain";

isBlockedDomain = isBlockedDomain.getFluxApi();
const result = require("set").fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = isBlockedDomain;
export const hasFluxApi = function hasFluxApi() {
  return null != isBlockedDomain;
};