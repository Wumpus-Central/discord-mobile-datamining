// === Module 662: getSystemLocale ===

// Module 662 (getSystemLocale)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcing from "enforcing" /* 663 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

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