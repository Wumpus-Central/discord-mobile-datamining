// discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx
let result = require("_initLibdiscore").fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx");

export const isBlockedDomain = function isBlockedDomain(arg0) {
  const BlockedDomainsStore = require(1870) /* LIBDISCORE_JSI */.BlockedDomainsStore;
  return BlockedDomainsStore.isBlockedDomain(arg0);
};
export const startFetchingBlockedDomains = function startFetchingBlockedDomains(arg0) {
  const BlockedDomainsStore = require(1870) /* LIBDISCORE_JSI */.BlockedDomainsStore;
  const result = BlockedDomainsStore.startFetchingBlockedDomains(arg0);
};
export const consumeLogs = function consumeLogs() {
  return require(1870) /* LIBDISCORE_JSI */.consumeLogs();
};
export function isUnsupportedBrowser() {
  return false;
}
export const getExperimentCacher = function getExperimentCacher() {
  return require(1870) /* LIBDISCORE_JSI */.ExperimentCacher;
};
export const getHttpClientAPI = function getHttpClientAPI() {
  return require(1870) /* LIBDISCORE_JSI */.getHttpClientAPI();
};
export const rustMultiply = require("LIBDISCORE_JSI").rustMultiply;
export const crash = require("LIBDISCORE_JSI").crash;
export const generateLaunchSignature = require("LIBDISCORE_JSI").generateLaunchSignature;
export const getFluxApi = require("LIBDISCORE_JSI").getFluxApi;
export const isLibdiscoreInitialized = require("_initLibdiscore").isLibdiscoreInitialized;