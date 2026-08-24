// === Module 1916: fluxApi ===

// Module 1916 (fluxApi)
import set from "set" /* 2 */;
import isBlockedDomain from "isBlockedDomain" /* 1917 */;

isBlockedDomain = isBlockedDomain.getFluxApi();
const result = set.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = isBlockedDomain;
export const hasFluxApi = function hasFluxApi() {
  return null != isBlockedDomain;
};