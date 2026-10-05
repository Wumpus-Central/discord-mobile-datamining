// _runtime/metro/00878__.js
import react_native from "../00017_react-native.js";
import RN_GLOBAL_OBJ from "../00692_RN_GLOBAL_OBJ.js";
import ReactNativeLibraries from "../00873_ReactNativeLibraries.js";
import _mod879 from "00879__.js";
import _slicedToArray from "00032__slicedToArray.js";

const Platform = react_native.Platform;

export const isHermesEnabled = function isHermesEnabled() {
  return RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.HermesInternal;
};
export const isTurboModuleEnabled = function isTurboModuleEnabled() {
  const tmp3 =
    true === RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.RN$Bridgeless || null != RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.__turboModuleProxy;
  return tmp3;
};
export const isFabricEnabled = function isFabricEnabled() {
  return null != RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.nativeFabricUIManager;
};
export const getReactNativeVersion = function getReactNativeVersion() {
  let major;
  let minor;
  let patch;
  if (ReactNativeLibraries.ReactNativeLibraries.ReactNativeVersion) {
    const version = ReactNativeLibraries.ReactNativeLibraries.ReactNativeVersion.version;
    ({ major, minor, patch } = version);
    let str2 = "";
    if (null != version.prerelease) {
      const _HermesInternal = HermesInternal;
      str2 = "-" + version.prerelease;
    }
    const _HermesInternal2 = HermesInternal;
    return "" + major + "." + minor + "." + patch + str2;
  }
};
export const isExpo = function isExpo() {
  return null != RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.expo;
};
export const isExpoGo = function isExpoGo() {
  const obj = _mod879;
  return obj.getExpoGo();
};
export const getExpoGoVersion = function getExpoGoVersion() {
  const obj = _mod879;
  const expoConstants = obj.getExpoConstants();
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
  let parts;
  const obj = _mod879;
  const expoConstants = obj.getExpoConstants();
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
    const str = expoConstants.manifest.runtimeVersion;
    parts = str.split(":");
  } else {
    parts = [];
  }
  return _slicedToArray(parts, 2)[1];
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
  let prop;
  if (null !== getRuntimeProperties) {
    if (undefined !== getRuntimeProperties) {
      prop = getRuntimeProperties.call(_HermesInternal)["OSS Release Version"];
    }
  }
  return prop;
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
