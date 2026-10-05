// === Module 1072: ? ===

// Module 1072
import react_native from "react-native" /* 17 */;
import RN_GLOBAL_OBJ2 from "RN_GLOBAL_OBJ" /* 692 */;
import ReactNativeLibraries from "ReactNativeLibraries" /* 873 */;
import _mod878 from "module_878" /* 878 */;

const Alert = react_native.Alert;

export const isModalSupported = function isModalSupported() {
  let major;
  let minor;
  const ReactNativeVersion = ReactNativeLibraries.ReactNativeLibraries.ReactNativeVersion;
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
  const tmpResult = _mod878;
  const isFabricEnabledResult = tmpResult.isFabricEnabled() && 0 === major && minor && minor < 71;
  return !isFabricEnabledResult;
};
export const isNativeDriverSupportedForColorAnimations = function isNativeDriverSupportedForColorAnimations() {
  let major;
  let minor;
  const ReactNativeVersion = ReactNativeLibraries.ReactNativeLibraries.ReactNativeVersion;
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
  let flag = major && major > 0;
  if (!flag) {
    flag = minor && minor >= 69;
    const tmp = minor && minor >= 69;
  }
  if (!flag) {
    flag = false;
  }
  return flag;
};
export const isValidEmail = (trimmed1) => {
  const obj = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return obj.test(trimmed1);
};
export const base64ToUint8Array = function(placeholder) {
  if (typeof atob === "function") {
    const obj = _mod878;
    if (obj.isWeb()) {
      const _atob = atob;
      const _Uint8Array = Uint8Array;
      const items = [];
      HermesBuiltin.arraySpread(items, atob(placeholder), 0);
      const self = this;
      const self2 = this;
      const uint8Array = new Uint8Array(items.map((item) => item.charCodeAt(0)));
      return uint8Array;
    }
  }
  const error = new Error("atob is not available in this environment.");
  throw error;
};
export const feedbackAlertDialog = (errorTitle, captureScreenshotError) => {
  const obj = _mod878;
  if (obj.isWeb()) {
    if (undefined !== RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ.alert) {
      const RN_GLOBAL_OBJ = RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ;
      const _HermesInternal = HermesInternal;
      RN_GLOBAL_OBJ.alert("" + errorTitle + "\n" + captureScreenshotError);
    }
  }
  Alert.alert(errorTitle, captureScreenshotError);
};