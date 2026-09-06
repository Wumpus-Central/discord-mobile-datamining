// discord_common/js/packages/design/utils/ThemeUtils.tsx
import ThemeTypes from "../../tokens/themes/generated/generated-definitions.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === ThemeTypes.ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (ThemeTypes.ThemeTypes.DARK !== arg0) {
    if (tmp(577).ThemeTypes.MIDNIGHT !== arg0) {
      if (tmp(577).ThemeTypes.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};
