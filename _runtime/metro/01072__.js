// === Module 1072: ? ===

// Module 1072
import _mod17 from "module_17" /* 17 */;
import RN_GLOBAL_OBJ2 from "RN_GLOBAL_OBJ" /* 692 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 873 */;
import _mod878 from "module_878" /* 878 */;

const Alert = _mod17.Alert;

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
  let isFabricEnabledResult = _mod878.isFabricEnabled();
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
export const isValidEmail = (trimmed1) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed1);
export const base64ToUint8Array = (placeholder) => {
  if (typeof atob === "function") {
    if (obj.isWeb()) {
      const _atob = atob;
      const _Uint8Array = Uint8Array;
      const items = [];
      HermesBuiltin.arraySpread(atob(placeholder), 0);
      const uint8Array = new Uint8Array(items.map((item) => item.charCodeAt(0)));
      return uint8Array;
    }
    obj = _mod878;
  }
  const error = new Error("atob is not available in this environment.");
  throw error;
};
export const feedbackAlertDialog = (errorTitle, captureScreenshotError) => {
  if (obj.isWeb()) {
    if (undefined !== RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ.alert) {
      const RN_GLOBAL_OBJ = RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ;
      const _HermesInternal = HermesInternal;
      RN_GLOBAL_OBJ.alert("" + errorTitle + "\n" + captureScreenshotError);
    }
  }
  Alert.alert(errorTitle, captureScreenshotError);
  obj = _mod878;
};