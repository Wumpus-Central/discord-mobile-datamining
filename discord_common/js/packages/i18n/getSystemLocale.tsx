// discord_common/js/packages/i18n/getSystemLocale.tsx
const result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const tmp3 = require(17) /* get ActivityIndicator */;
  if ("android" === tmp3.Platform.OS) {
    let LocalizationManager = require(666) /* enforcing */.default;
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