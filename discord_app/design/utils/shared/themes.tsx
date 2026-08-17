// discord_app/design/utils/shared/themes.tsx
import set from "../../../../_runtime/00002_set.js";
import sum from "../../../../discord_common/js/shared/Constants.tsx";

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