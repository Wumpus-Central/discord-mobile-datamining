// === Module 16959: updateTheme ===

// Module 16959 (updateTheme)
import _mod17 from "module_17" /* 17 */;
import NativeThemeModuleDefault from "NativeThemeModule" /* 14439 */;
import size from "module_2" /* 2 */;

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