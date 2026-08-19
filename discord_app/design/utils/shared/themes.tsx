// discord_app/design/utils/shared/themes.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import sum from "../../../../discord_common/js/shared/Constants.tsx";

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