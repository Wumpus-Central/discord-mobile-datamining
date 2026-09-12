// discord_app/modules/auth/native/components/utils/getDeviceCountry.tsx
import NativeDeviceLocaleModule from "../../../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

export const getDeviceCountry = function getDeviceCountry() {
  const _default = NativeDeviceLocaleModule.default;
  let Language;
  if (_default != null) {
    Language = _default.getConstants().Language;
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
};
