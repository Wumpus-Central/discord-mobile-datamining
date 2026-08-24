// discord_app/design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx
import set from "../../../../../_runtime/00002_set.js";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";

const result = set.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  const obj = ManaContext;
  ManaContext;
  let str = "dark";
  if (!hasThemeFlagResult) {
    let str2 = null;
    if (tmp3) {
      str2 = "light";
    }
    str = str2;
  }
  return str;
};