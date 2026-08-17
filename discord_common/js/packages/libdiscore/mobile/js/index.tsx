// discord_common/js/packages/libdiscore/mobile/js/index.tsx
import set from "../../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import typedGlobal from "global_types.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
if (NativeModules.LibDiscoreModule) {
  let LibDiscoreModule = NativeModules.LibDiscoreModule;
} else {
  const _Proxy = Proxy;
  const obj = { get: null };
  obj[0] = function get() {
    error = new Error("The package 'react-native-libdiscore-jsi-module' doesn't seem to be linked");
    throw error;
  };
  LibDiscoreModule = new Proxy({}, obj);
}
LibDiscoreModule.bridgeJSIFunctions();
const LIBDISCORE_JSI = typedGlobal.typedGlobal.LIBDISCORE_JSI;
let result = set.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/index.tsx");
const prototype = function BlockedDomainsStore() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["isBlockedDomain"] = function isBlockedDomain(arg0) {
  return LIBDISCORE_JSI.isBlockedDomain(arg0);
};
prototype["startFetchingBlockedDomains"] = function startFetchingBlockedDomains(arg0) {
  const result = LIBDISCORE_JSI.startFetchingBlockedDomains(arg0);
};

export const ExperimentCacher = LIBDISCORE_JSI.ExperimentCacher;
export const rustMultiply = function rustMultiply(arg0, arg1) {
  return LIBDISCORE_JSI.rustMultiply(arg0, arg1);
};
export const consumeLogs = function consumeLogs() {
  return LIBDISCORE_JSI.consumeLogs();
};
export const BlockedDomainsStore = prototype;
export const getFluxApi = function getFluxApi() {
  return LIBDISCORE_JSI.fluxApi;
};
export const crash = function crash() {
  LIBDISCORE_JSI.crash();
};
export const registerDevLogListener = function registerDevLogListener(arg0) {
  const result = LIBDISCORE_JSI.registerDevLogListener(arg0);
};
export const generateLaunchSignature = function generateLaunchSignature(globalObject) {
  return LIBDISCORE_JSI.generateLaunchSignature(globalObject);
};
export const getHttpClientAPI = function getHttpClientAPI() {
  return { httpRequest: LIBDISCORE_JSI.httpRequest, getHttpRequestStatus: LIBDISCORE_JSI.getHttpRequestStatus, cancelHttpRequest: LIBDISCORE_JSI.cancelHttpRequest, getTrackedRequestCount: LIBDISCORE_JSI.getTrackedRequestCount };
};