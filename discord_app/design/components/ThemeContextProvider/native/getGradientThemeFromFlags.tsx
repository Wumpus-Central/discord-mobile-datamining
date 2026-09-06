// discord_app/design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx",
);

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
  native;
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
