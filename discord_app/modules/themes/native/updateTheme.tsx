// === Module 16451: updateTheme ===

// Module 16451 (updateTheme)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import enforcingDefault from "enforcing" /* 14008 */;

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/themes/native/updateTheme.tsx");

export const updateTheme = function updateTheme(arg0) {
  if (obj.isAndroid()) {
    let updateThemeResult = enforcingDefault.updateTheme(arg0);
    const obj2 = enforcingDefault;
  } else {
    const DCDTheme = NativeModules.DCDTheme;
    updateThemeResult = DCDTheme.updateTheme(arg0);
  }
  return updateThemeResult;
};