// === Module 1917: isBlockedDomain ===

// Module 1917 (isBlockedDomain)
import obj132 from "obj132" /* 2 */;
import LIBDISCORE_JSI from "LIBDISCORE_JSI" /* 1918 */;
import _initLibdiscore from "_initLibdiscore" /* 1920 */;

let result = obj132.fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx");

export const isBlockedDomain = function isBlockedDomain(arg0) {
  const BlockedDomainsStore = LIBDISCORE_JSI.BlockedDomainsStore;
  return BlockedDomainsStore.isBlockedDomain(arg0);
};
export const startFetchingBlockedDomains = function startFetchingBlockedDomains(arg0) {
  const BlockedDomainsStore = LIBDISCORE_JSI.BlockedDomainsStore;
  const result = BlockedDomainsStore.startFetchingBlockedDomains(arg0);
};
export const consumeLogs = function consumeLogs() {
  return LIBDISCORE_JSI.consumeLogs();
};
export function isUnsupportedBrowser() {
  return false;
}
export const getExperimentCacher = function getExperimentCacher() {
  return LIBDISCORE_JSI.ExperimentCacher;
};
export const getHttpClientAPI = function getHttpClientAPI() {
  return LIBDISCORE_JSI.getHttpClientAPI();
};
export const rustMultiply = LIBDISCORE_JSI.rustMultiply;
export const crash = LIBDISCORE_JSI.crash;
export const generateLaunchSignature = LIBDISCORE_JSI.generateLaunchSignature;
export const getFluxApi = LIBDISCORE_JSI.getFluxApi;
export const isLibdiscoreInitialized = _initLibdiscore.isLibdiscoreInitialized;