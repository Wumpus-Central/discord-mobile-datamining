// discord_common/js/packages/libdiscore/mobile/js/index.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import global_types from "global_types.tsx";
import clock from "clock.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let LibDiscoreModule;
const NativeModules = react_native.NativeModules;
if (NativeModules.LibDiscoreModule) {
  LibDiscoreModule = NativeModules.LibDiscoreModule;
} else {
  const _Proxy = Proxy;
  const self = this;
  const self2 = this;
  const obj = {
    get() {
      const error = new Error("The package 'react-native-libdiscore-jsi-module' doesn't seem to be linked");
      throw error;
    },
  };
  LibDiscoreModule = new Proxy({}, obj);
}
LibDiscoreModule.bridgeJSIFunctions();
const LIBDISCORE_JSI = global_types.typedGlobal.LIBDISCORE_JSI;
const ExperimentCacher = LIBDISCORE_JSI.ExperimentCacher;
let result = size.fileFinishedImporting("../discord_common/js/packages/libdiscore/mobile/js/index.tsx");
class BlockedDomainsStore {
  static isBlockedDomain(arg0) {
    return LIBDISCORE_JSI.isBlockedDomain(arg0);
  }
  static startFetchingBlockedDomains(arg0) {
    const result = LIBDISCORE_JSI.startFetchingBlockedDomains(arg0);
  }
}

export { ExperimentCacher };
export const rustMultiply = function rustMultiply(arg0, arg1) {
  return LIBDISCORE_JSI.rustMultiply(arg0, arg1);
};
export const consumeLogs = function consumeLogs() {
  return LIBDISCORE_JSI.consumeLogs();
};
export const monotonicNowMs = clock.monotonicNowMs;
export { BlockedDomainsStore };
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
  return {
    httpRequest: LIBDISCORE_JSI.httpRequest,
    getHttpRequestStatus: LIBDISCORE_JSI.getHttpRequestStatus,
    cancelHttpRequest: LIBDISCORE_JSI.cancelHttpRequest,
    getTrackedRequestCount: LIBDISCORE_JSI.getTrackedRequestCount,
  };
};
