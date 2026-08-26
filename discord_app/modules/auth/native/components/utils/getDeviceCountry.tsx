// === Module 15404: getDeviceCountry ===

// Module 15404 (getDeviceCountry)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set2 from "set" /* 500 */;
import enforcing from "enforcing" /* 666 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

export const getDeviceCountry = function getDeviceCountry() {
  if (obj.isAndroid()) {
    let LocalizationManager = enforcing.default;
  } else {
    LocalizationManager = NativeModules.LocalizationManager;
  }
  let Language;
  if (LocalizationManager != null) {
    Language = LocalizationManager.getConstants().Language;
  }
  if (null == Language) {
    return null;
  } else {
    const parts = Language.split("-");
    let formatted = null;
    if (parts.length >= 2) {
      formatted = parts[parts.length - 1].toUpperCase();
      const str2 = parts[parts.length - 1];
    }
    return formatted;
  }
  obj = set2;
  const tmp = require;
};