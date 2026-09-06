// === Module 1061: isModalSupported ===

// Module 1061 (isModalSupported)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 862 */;
import isHermesEnabled from "isHermesEnabled" /* 867 */;

const Alert = get_ActivityIndicator.Alert;

export const isModalSupported = function isModalSupported() {
  const ReactNativeVersion = TurboModuleRegistry.ReactNativeLibraries.ReactNativeVersion;
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
  let isFabricEnabledResult = isHermesEnabled.isFabricEnabled();
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
  const ReactNativeVersion = TurboModuleRegistry.ReactNativeLibraries.ReactNativeVersion;
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
  if (typeof atob === "function") {
    if (obj.isWeb()) {
      const _atob = atob;
      const _Uint8Array = Uint8Array;
      const items = [];
      HermesBuiltin.arraySpread(atob(closure_0), 0);
      const uint8Array = new Uint8Array(items.map((str) => str.charCodeAt(0)));
      return uint8Array;
    }
    obj = isHermesEnabled;
  }
  error = new Error("atob is not available in this environment.");
  throw error;
};
export const feedbackAlertDialog = (Alert) => {
  if (obj.isWeb()) {
    if (undefined !== tmp(681).RN_GLOBAL_OBJ.alert) {
      const RN_GLOBAL_OBJ = tmp(681).RN_GLOBAL_OBJ;
      const _HermesInternal = HermesInternal;
      RN_GLOBAL_OBJ.alert("" + Alert + "\n" + arg1);
    }
  }
  Alert.alert(Alert, arg1);
};