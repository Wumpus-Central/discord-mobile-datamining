// discord_common/js/packages/i18n/getSystemLocale.tsx
import NativeDeviceLocaleModule from "../rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
