// === Module 5036: themes ===

// Module 5036 (themes)
import Constants from "Constants" /* 1083 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("design/utils/shared/themes.tsx");

export function isThemeLight(arg0) {
  return arg0 === ThemeTypes.LIGHT;
}
export function isThemeDark(theme) {
  if (ThemeTypes.ASH !== theme) {
    if (ThemeTypes.ONYX !== theme) {
      if (ThemeTypes.DARK !== theme) {
        return false;
      }
    }
  }
  return true;
}