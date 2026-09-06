// discord_app/modules/themes/native/updateSaturation.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import NativeThemeModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeThemeModule.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/themes/native/updateSaturation.tsx");

export const updateSaturation = function updateSaturation(saturation) {
  if (obj.isAndroid()) {
    let updateSaturationResult = NativeThemeModuleDefault.updateSaturation(saturation);
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateSaturationResult = DCDTheme.updateSaturation(saturation);
  }
  return updateSaturationResult;
};
