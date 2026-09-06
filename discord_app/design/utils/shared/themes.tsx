// === Module 4269: isThemeLight ===

// Module 4269 (isThemeLight)
import set from "set" /* 2 */;
import sum from "sum" /* 1085 */;

const ThemeTypes = sum.ThemeTypes;
const result = set.fileFinishedImporting("design/utils/shared/themes.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (ThemeTypes.DARK !== arg0) {
    if (tmp.MIDNIGHT !== arg0) {
      if (tmp.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};