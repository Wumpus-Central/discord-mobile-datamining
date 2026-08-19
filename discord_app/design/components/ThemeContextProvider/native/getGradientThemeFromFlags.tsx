// === Module 4103: getGradientThemeFromFlags ===

// Module 4103 (getGradientThemeFromFlags)
import obj132 from "obj132" /* 2 */;
import ManaContext from "ManaContext" /* 4104 */;

const result = obj132.fileFinishedImporting("design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx");

export const getGradientThemeFromFlags = function getGradientThemeFromFlags(themeContext) {
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