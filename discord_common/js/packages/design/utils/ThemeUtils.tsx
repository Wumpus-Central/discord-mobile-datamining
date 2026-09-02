// discord_common/js/packages/design/utils/ThemeUtils.tsx
import set from "../../../../../_runtime/00002_set.js";
import items from "../../tokens/themes/generated/generated-definitions.tsx";

const result = set.fileFinishedImporting("../discord_common/js/packages/design/utils/ThemeUtils.tsx");

export const isThemeLight = function isThemeLight(arg0) {
  return arg0 === items.ThemeTypes.LIGHT;
};
export const isThemeDark = function isThemeDark(arg0) {
  if (items.ThemeTypes.DARK !== arg0) {
    if (tmp(710).ThemeTypes.MIDNIGHT !== arg0) {
      if (tmp(710).ThemeTypes.DARKER !== arg0) {
        return false;
      }
    }
  }
  return true;
};
