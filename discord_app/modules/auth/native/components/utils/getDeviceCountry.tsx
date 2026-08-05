// discord_app/modules/auth/native/components/utils/getDeviceCountry.tsx
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

export const getDeviceCountry = function getDeviceCountry() {
  if (obj.isAndroid()) {
    let LocalizationManager = tmp(666).default;
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
  obj = require("../../../../../utils/PlatformUtils.tsx") /* set */;
  tmp = require;
};