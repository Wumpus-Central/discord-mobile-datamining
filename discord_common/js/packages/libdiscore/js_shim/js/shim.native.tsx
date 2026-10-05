// === Module 562: shim ===

// Module 562 (shim)
import ExperimentCacher from "ExperimentCacher" /* 563 */;
import initLibdiscore from "initLibdiscore" /* 566 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx");

export const isBlockedDomain = function isBlockedDomain(arg0) {
  const BlockedDomainsStore = ExperimentCacher.BlockedDomainsStore;
  return BlockedDomainsStore.isBlockedDomain(arg0);
};
export const startFetchingBlockedDomains = function startFetchingBlockedDomains(combined) {
  const BlockedDomainsStore = ExperimentCacher.BlockedDomainsStore;
  const result = BlockedDomainsStore.startFetchingBlockedDomains(combined);
};
export const consumeLogs = function consumeLogs() {
  const obj = ExperimentCacher;
  return obj.consumeLogs();
};
export function isUnsupportedBrowser() {
  return false;
}
export const getExperimentCacher = function getExperimentCacher() {
  return ExperimentCacher.ExperimentCacher;
};
export const getHttpClientAPI = function getHttpClientAPI() {
  const obj = ExperimentCacher;
  return obj.getHttpClientAPI();
};
export const rustMultiply = ExperimentCacher.rustMultiply;
export const crash = ExperimentCacher.crash;
export const generateLaunchSignature = ExperimentCacher.generateLaunchSignature;
export const getFluxApi = ExperimentCacher.getFluxApi;
export const isLibdiscoreInitialized = initLibdiscore.isLibdiscoreInitialized;