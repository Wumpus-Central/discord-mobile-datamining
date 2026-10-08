// discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextFlags.tsx
import c from "../../../../../../_runtime/00576_c.js";
import ThemeContext from "ThemeContext.tsx";
import ReactCompilerGating from "../../../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

function hasThemeFlag(flags, MOBILE_DARK_GRADIENT_THEME_ENABLED) {
  return (flags.flags & MOBILE_DARK_GRADIENT_THEME_ENABLED) === MOBILE_DARK_GRADIENT_THEME_ENABLED;
}
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextFlags.tsx",
);

export const ThemeContextFlags = {
  MOBILE_DARK_GRADIENT_THEME_ENABLED: 4,
  [4]: "MOBILE_DARK_GRADIENT_THEME_ENABLED",
  MOBILE_LIGHT_GRADIENT_THEME_ENABLED: 8,
  [8]: "MOBILE_LIGHT_GRADIENT_THEME_ENABLED",
  REDUCED_CONTRAST_ENABLED: 16,
  [16]: "REDUCED_CONTRAST_ENABLED",
  INCREASED_CONTRAST_ENABLED: 32,
  [32]: "INCREASED_CONTRAST_ENABLED",
  REDUCE_SATURATION_ENABLED: 64,
  [64]: "REDUCE_SATURATION_ENABLED",
};
export { hasThemeFlag };
export const setThemeFlag = function setThemeFlag(tmpResult, MOBILE_DARK_GRADIENT_THEME_ENABLED) {
  return tmpResult | MOBILE_DARK_GRADIENT_THEME_ENABLED;
};
export const useThemeFlag = ReactCompilerGating.isReactCompilerEnabled()
  ? function useThemeFlag(arg0) {
      const cResult = c.c(3);
      const themeContext = ThemeContext.useThemeContext();
      if (cResult[0] === themeContext) {
        if (cResult[1] === arg0) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      cResult[0] = themeContext;
      cResult[1] = arg0;
      cResult[2] = (themeContext.flags & arg0) === arg0;
      tmp3 = tmp4;
    }
  : function useThemeFlag(arg0) {
      return (ThemeContext.useThemeContext().flags & arg0) === arg0;
    };
