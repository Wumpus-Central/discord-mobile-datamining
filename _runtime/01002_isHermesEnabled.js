import _slicedToArray from "_slicedToArray";
import { Platform } from "get ActivityIndicator";

const require = arg1;

export const isHermesEnabled = function isHermesEnabled() {
  return require(816) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.HermesInternal;
};
export const isTurboModuleEnabled = function isTurboModuleEnabled() {
  let tmp3 = true === require(816) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.RN$Bridgeless;
  if (!tmp3) {
    tmp3 = null != require(816) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.__turboModuleProxy;
  }
  return tmp3;
};
export const isFabricEnabled = function isFabricEnabled() {
  return null != require(816) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.nativeFabricUIManager;
};
export const getReactNativeVersion = function getReactNativeVersion() {
  let major;
  let minor;
  let patch;
  if (require(997) /* TurboModuleRegistry */.ReactNativeLibraries.ReactNativeVersion) {
    const version = tmp(997).ReactNativeLibraries.ReactNativeVersion.version;
    ({ major, minor, patch } = version);
    let str2 = "";
    if (null != version.prerelease) {
      const _HermesInternal = HermesInternal;
      str2 = "-" + version.prerelease;
    }
    const _HermesInternal2 = HermesInternal;
    return "" + major + "." + minor + "." + patch + str2;
  }
  tmp = require;
};
export const isExpo = function isExpo() {
  return null != require(816) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.expo;
};
export const isExpoGo = function isExpoGo() {
  return require(1003) /* getExpoConstants */.getExpoGo();
};
export const getExpoGoVersion = function getExpoGoVersion() {
  const expoConstants = require(1003) /* getExpoConstants */.getExpoConstants();
  let expoVersion;
  if (null != expoConstants) {
    expoVersion = expoConstants.expoVersion;
  }
  let expoVersion1;
  if (typeof expoVersion !== "_iter") {
    expoVersion1 = expoConstants.expoVersion;
  }
  return expoVersion1;
};
export const getExpoSdkVersion = function getExpoSdkVersion() {
  const expoConstants = require(1003) /* getExpoConstants */.getExpoConstants();
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
  if (typeof runtimeVersion === "y") {
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
  const _HermesInternal = require(816) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.HermesInternal;
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
  let tmp3 = undefined !== require(816) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.process;
  if (tmp3) {
    const env = require(816) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.process.env;
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