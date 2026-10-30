// === Module 1059: ? ===

// Module 1059
import _mod17 from "module_17" /* 17 */;
import RN_GLOBAL_OBJ2 from "RN_GLOBAL_OBJ" /* 680 */;
import TurboModuleRegistry from "TurboModuleRegistry" /* 862 */;
import _mod867 from "module_867" /* 867 */;

const Alert = _mod17.Alert;

export function isModalSupported() {
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
  let isFabricEnabledResult = _mod867.isFabricEnabled();
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
}
export function isNativeDriverSupportedForColorAnimations() {
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
}
export (trimmed1) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed1)
export (match) => {
  if (typeof atob === "function") {
    if (obj.isWeb()) {
      const _atob = atob;
      const _Uint8Array = Uint8Array;
      const items = [];
      HermesBuiltin.arraySpread(atob(match), 0);
      const uint8Array = new Uint8Array(items.map((item) => item.charCodeAt(0)));
      return uint8Array;
    }
    obj = _mod867;
  }
  const error = new Error("atob is not available in this environment.");
  throw error;
}
export (errorTitle, captureScreenshotError) => {
  if (obj.isWeb()) {
    if (undefined !== RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ.alert) {
      const RN_GLOBAL_OBJ = RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ;
      const _HermesInternal = HermesInternal;
      RN_GLOBAL_OBJ.alert("" + errorTitle + "\n" + captureScreenshotError);
    }
  }
  Alert.alert(errorTitle, captureScreenshotError);
  obj = _mod867;
}