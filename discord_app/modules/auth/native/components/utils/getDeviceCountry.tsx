// === Module 15231: getDeviceCountry ===

// Module 15231 (getDeviceCountry)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;
import enforcing from "enforcing" /* 666 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

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
    }
    return formatted;
  }
  obj = obj1322;
};