// discord_app/modules/themes/native/updateTheme.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import NativeThemeModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = NativeThemeModuleDefault.updateTheme(arg0);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};
