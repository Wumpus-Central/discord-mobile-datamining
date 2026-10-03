// discord_app/design/utils/shared/themes.tsx
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("design/utils/shared/themes.tsx");

export const isThemeLight = function isThemeLight(theme) {
  return theme === ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(theme) {
  if (ThemeTypes.ASH !== theme) {
    if (ThemeTypes.ONYX !== theme) {
      if (ThemeTypes.DARK !== theme) {
        return false;
      }
    }
  }
  return true;
};
