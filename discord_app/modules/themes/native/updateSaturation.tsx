// discord_app/modules/themes/native/updateSaturation.tsx
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx").updateSaturation(saturation);
    const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx");
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};