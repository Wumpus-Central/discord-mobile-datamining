// discord_app/modules/auth/native/components/utils/getDeviceCountry.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import NativeDeviceLocaleModule from "../../../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

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
