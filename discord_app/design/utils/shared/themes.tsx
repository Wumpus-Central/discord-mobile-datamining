// discord_app/design/utils/shared/themes.tsx
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("design/utils/shared/themes.tsx");

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
