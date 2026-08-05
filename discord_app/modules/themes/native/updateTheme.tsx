// discord_app/modules/themes/native/updateTheme.tsx
import { NativeModules } from "get ActivityIndicator";

const result = require("enforcing").fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx").updateTheme(arg0);
    const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx");
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};