// discord_app/hooks/useTheme.tsx
import react from "../../_runtime/00576_react.js";
import Constants from "../Constants.tsx";
import shared from "../design/shared.tsx";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const ThemeTypes = Constants.ThemeTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useTheme = () => {
  const obj = shared;
  return obj.useThemeContext().theme;
};
ReactCompilerGating = ReactCompilerGating_mod;
function getThemeIndex(arg0) {
  if (ThemeTypes.DARK === arg0) {
    return 0;
  } else if (tmp.LIGHT === arg0) {
    return 1;
  }
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react;
      const cResult = obj.c(2);
      if (typeof fn === "function") {
        let tmp4;
        const tmpResult = shared;
        const theme = tmpResult.useThemeContext().theme;
        if (cResult[0] !== theme) {
          let num2 = 0;
          if (ThemeTypes.DARK !== theme) {
            if (ThemeTypes.LIGHT === theme) {
              num2 = 1;
            }
          }
          cResult[0] = theme;
          cResult[1] = num2;
          tmp4 = num2;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  : () => {
      if (typeof fn === "function") {
        const obj = shared;
        const theme = obj.useThemeContext().theme;
        let num = 0;
        if (ThemeTypes.DARK !== theme) {
          if (ThemeTypes.LIGHT === theme) {
            num = 1;
          }
        }
        return num;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
const result1 = size.fileFinishedImporting("hooks/useTheme.tsx");

export default useTheme;
export { useTheme };
export const useThemeIndex = tmp3;
export { getThemeIndex };
