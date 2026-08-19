// discord_common/js/packages/i18n/getSystemLocale.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import enforcing from "../rtn-codegen/js/NativeDeviceLocaleModule.tsx";

const result = obj132.fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const tmp3 = get_ActivityIndicator;
  if ("android" === tmp3.Platform.OS) {
    let LocalizationManager = enforcing.default;
  } else {
    LocalizationManager = tmp3.NativeModules.LocalizationManager;
  }
  let str;
  if (null != LocalizationManager) {
    str = LocalizationManager.getConstants().Language;
  }
  if (str == null) {
    str = "";
  }
  return str;
};