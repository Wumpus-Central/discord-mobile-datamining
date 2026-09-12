// === Module 1338: getSystemLocale ===

// Module 1338 (getSystemLocale)
import NativeDeviceLocaleModule from "NativeDeviceLocaleModule" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/getSystemLocale.tsx");

export const getSystemLocale = function getSystemLocale() {
  const _default = NativeDeviceLocaleModule.default;
  let str;
  if (null != _default) {
    str = _default.getConstants().Language;
  }
  if (str == null) {
    str = "";
  }
  return str;
};