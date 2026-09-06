// === Module 4269: themes ===

// Module 4269 (themes)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("design/utils/shared/themes.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(theme) {
  if (ThemeTypes.DARK !== theme) {
    if (ThemeTypes.MIDNIGHT !== theme) {
      if (ThemeTypes.DARKER !== theme) {
        return false;
      }
    }
  }
  return true;
};