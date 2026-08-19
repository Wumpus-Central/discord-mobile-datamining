// === Module 1364: isThemeLight ===

// Module 1364 (isThemeLight)
import obj132 from "obj132" /* 2 */;
import sum from "sum" /* 505 */;

const ThemeTypes = sum.ThemeTypes;
const result = obj132.fileFinishedImporting("design/utils/shared/themes.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (ThemeTypes.DARK !== arg0) {
    if (ThemeTypes.MIDNIGHT !== arg0) {
      if (ThemeTypes.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};