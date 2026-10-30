// === Module 5025: ThemeUtils ===

// Module 5025 (ThemeUtils)
import ThemeTypes from "ThemeTypes" /* 576 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export function isThemeLight(arg0) {
  return arg0 === ThemeTypes.ThemeTypes.LIGHT;
}
export function isThemeDark(arg0) {
  if (ThemeTypes.ThemeTypes.ASH !== arg0) {
    if (ThemeTypes.ThemeTypes.ONYX !== arg0) {
      if (ThemeTypes.ThemeTypes.DARK !== arg0) {
        return false;
      }
    }
  }
  return true;
}