// === Module 1002: isHermesEnabled ===

// Module 1002 (isHermesEnabled)
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 816 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 997 */;
import getExpoConstants from "getExpoConstants" /* 1003 */;
import closure_2 from "_slicedToArray" /* 32 */;
import { Platform } from "get ActivityIndicator" /* 17 */;

require = arg1;

export const isHermesEnabled = function isHermesEnabled() {
  return RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.HermesInternal;
};
export const isTurboModuleEnabled = function isTurboModuleEnabled() {
  let tmp3 = true === RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.RN$Bridgeless;
  if (!tmp3) {
    tmp3 = null != RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.__turboModuleProxy;
  }
  return tmp3;
};
export const isFabricEnabled = function isFabricEnabled() {
  return null != RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.nativeFabricUIManager;
};
export const getReactNativeVersion = function getReactNativeVersion() {
  if (TurboModuleRegistry.ReactNativeLibraries.ReactNativeVersion) {
    const version = TurboModuleRegistry.ReactNativeLibraries.ReactNativeVersion.version;
    ({ major, minor, patch } = version);
    let str2 = "";
    if (null != version.prerelease) {
      const _HermesInternal = HermesInternal;
      str2 = "-" + version.prerelease;
    }
    const _HermesInternal2 = HermesInternal;
    return "" + major + "." + minor + "." + patch + str2;
  }
  const tmp = require;
};
export const isExpo = function isExpo() {
  return null != RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.expo;
};
export const isExpoGo = function isExpoGo() {
  return getExpoConstants.getExpoGo();
};
export const getExpoGoVersion = function getExpoGoVersion() {
  const expoConstants = getExpoConstants.getExpoConstants();
  let expoVersion;
  if (null != expoConstants) {
    expoVersion = expoConstants.expoVersion;
  }
  let expoVersion1;
  if (typeof expoVersion === "string") {
    expoVersion1 = expoConstants.expoVersion;
  }
  return expoVersion1;
};
export const getExpoSdkVersion = function getExpoSdkVersion() {
  const expoConstants = getExpoConstants.getExpoConstants();
  let manifest;
  if (null != expoConstants) {
    manifest = expoConstants.manifest;
  }
  let runtimeVersion;
  if (null !== manifest) {
    if (undefined !== manifest) {
      runtimeVersion = manifest.runtimeVersion;
    }
  }
  if (typeof runtimeVersion === "string") {
    let parts = expoConstants.manifest.runtimeVersion.split(":");
    const str = expoConstants.manifest.runtimeVersion;
  } else {
    parts = [];
  }
  return callback(parts, 2)[1];
};
export function isWeb() {
  return false;
}
export function notWeb() {
  return true;
}
export function isMobileOs() {
  return true;
}
export function notMobileOs() {
  return false;
}
export const getHermesVersion = function getHermesVersion() {
  const _HermesInternal = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.HermesInternal;
  let getRuntimeProperties;
  if (null !== _HermesInternal) {
    if (undefined !== _HermesInternal) {
      getRuntimeProperties = _HermesInternal.getRuntimeProperties;
    }
  }
  if (null !== getRuntimeProperties) {
    if (undefined !== getRuntimeProperties) {
      const call = getRuntimeProperties.call;
      OSS_Release_Version = typeof call === "unknown" ? getRuntimeProperties() : call(_HermesInternal)["OSS Release Version"];
    }
  }
};
export function getDefaultEnvironment() {
  return "production";
}
export const isRunningInMetroDevServer = function isRunningInMetroDevServer() {
  let tmp3 = undefined !== RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.process;
  if (tmp3) {
    const env = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.process.env;
    let prop;
    if (null !== env) {
      if (undefined !== env) {
        prop = env.___SENTRY_METRO_DEV_SERVER___;
      }
    }
    tmp3 = "true" === prop;
  }
  return tmp3;
};