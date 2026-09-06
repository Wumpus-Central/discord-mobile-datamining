// === Module 15965: getDeviceCountry ===

// Module 15965 (getDeviceCountry)
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

const NativeDeviceLocaleModule = tmp(1117);
const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

export const getDeviceCountry = function getDeviceCountry() {
  if (obj.isAndroid()) {
    let LocalizationManager = NativeDeviceLocaleModule.default;
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
  obj = PlatformUtils;
};