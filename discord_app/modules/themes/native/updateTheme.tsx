// discord_app/modules/themes/native/updateTheme.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx";

const NativeModules = get_ActivityIndicator.NativeModules;
const result = obj132.fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = enforcingDefault.updateTheme(arg0);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};