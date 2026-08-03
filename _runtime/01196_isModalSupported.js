// === Module 1196: isModalSupported ===

// Module 1196 (isModalSupported)
import { Alert } from "get ActivityIndicator";


export const isModalSupported = function isModalSupported() {
  let major;
  let minor;
  const ReactNativeVersion = require(997) /* TurboModuleRegistry */.ReactNativeLibraries.ReactNativeVersion;
  let version;
  if (null !== ReactNativeVersion) {
    if (undefined !== ReactNativeVersion) {
      version = ReactNativeVersion.version;
    }
  }
  if (!version) {
    version = {};
  }
  ({ minor, major } = version);
  let isFabricEnabledResult = require(1002) /* isHermesEnabled */.isFabricEnabled();
  if (isFabricEnabledResult) {
    isFabricEnabledResult = 0 === major;
  }
  if (isFabricEnabledResult) {
    isFabricEnabledResult = minor;
  }
  if (isFabricEnabledResult) {
    isFabricEnabledResult = minor < 71;
  }
  return !isFabricEnabledResult;
};
export const isNativeDriverSupportedForColorAnimations = function isNativeDriverSupportedForColorAnimations() {
  let major;
  let minor;
  const ReactNativeVersion = require(997) /* TurboModuleRegistry */.ReactNativeLibraries.ReactNativeVersion;
  let version;
  if (null !== ReactNativeVersion) {
    if (undefined !== ReactNativeVersion) {
      version = ReactNativeVersion.version;
    }
  }
  if (!version) {
    version = {};
  }
  ({ major, minor } = version);
  let flag = major;
  if (major) {
    flag = major > 0;
  }
  if (!flag) {
    let tmp = minor;
    if (minor) {
      tmp = minor >= 69;
    }
    flag = tmp;
  }
  if (!flag) {
    flag = false;
  }
  return flag;
};
export const isValidEmail = (arg0) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(arg0);
export const base64ToUint8Array = (closure_0) => {
  if (typeof atob !== "HAS_APPLICATION") {
    if (obj.isWeb()) {
      const _atob = atob;
      const _Uint8Array = Uint8Array;
      const items = [];
      HermesBuiltin.arraySpread(atob(closure_0), 0);
      const uint8Array = new Uint8Array(items.map((str) => str.charCodeAt(0)));
      return uint8Array;
    }
    obj = require(1002) /* isHermesEnabled */;
  }
  const error = new Error("atob is not available in this environment.");
  throw error;
};
export const feedbackAlertDialog = (Alert) => {
  if (obj.isWeb()) {
    if (undefined !== tmp(816).RN_GLOBAL_OBJ.alert) {
      const RN_GLOBAL_OBJ = tmp(816).RN_GLOBAL_OBJ;
      const _HermesInternal = HermesInternal;
      RN_GLOBAL_OBJ.alert("" + Alert + "\n" + arg1);
    }
  }
  Alert.alert(Alert, arg1);
};