// discord_common/js/packages/i18n/getSystemLocale.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import NativeDeviceLocaleModule from "../rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const tmp3 = _mod17;
  if ("android" === tmp3.Platform.OS) {
    let LocalizationManager = NativeDeviceLocaleModule.default;
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
