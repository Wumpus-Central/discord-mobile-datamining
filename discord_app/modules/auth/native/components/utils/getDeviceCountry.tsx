// discord_app/modules/auth/native/components/utils/getDeviceCountry.tsx
import react_native from "../../../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceLocaleModule.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/auth/native/components/utils/getDeviceCountry.tsx");

export const getDeviceCountry = function getDeviceCountry() {
  const _default = react_native.default;
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
      const str2 = parts[parts.length - 1];
      formatted = str2.toUpperCase();
    }
    return formatted;
  }
};
