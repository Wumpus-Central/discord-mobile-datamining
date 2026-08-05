import { enforcing } from "../rtn-codegen/js/NativeDeviceLocaleModule.tsx";
// discord_common/js/packages/i18n/getSystemLocale.tsx
const result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const tmp3 = require("../../../../_runtime/00017_get_ActivityIndicator.js") /* get ActivityIndicator */ /* get ActivityIndicator */;
  if ("android" === tmp3.Platform.OS) {
    let LocalizationManager = enforcing /* enforcing */.default;
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