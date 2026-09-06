// === Module 4281: isThemeLight ===

// Module 4281 (isThemeLight)
import set from "set" /* 2 */;
import items from "items" /* 577 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === items.ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (items.ThemeTypes.DARK !== arg0) {
    if (tmp(577).ThemeTypes.MIDNIGHT !== arg0) {
      if (tmp(577).ThemeTypes.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};