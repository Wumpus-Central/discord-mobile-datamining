// discord_app/modules/auth/native/components/utils/getDeviceCountry.tsx
import set from "../../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import set2 from "../../../../../utils/PlatformUtils.tsx";
import enforcing from "../../../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx";

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
