// === Module 1358: isThemeLight ===

// Module 1358 (isThemeLight)
import obj132 from "obj132" /* 2 */;
import items from "items" /* 713 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === items.ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (items.ThemeTypes.DARK !== arg0) {
    if (items.ThemeTypes.MIDNIGHT !== arg0) {
      if (items.ThemeTypes.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};