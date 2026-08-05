import { enforcing } from "../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx";
// discord_app/modules/themes/native/updateSaturation.tsx
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = enforcing.updateSaturation(saturation);
    const obj2 = enforcing;
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};