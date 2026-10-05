// discord_app/design/components/Illustration/native/index.tsx
import react from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ThemeTypes = Constants.ThemeTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (fn) => {
      const obj = react;
      const cResult = obj.c(3);
      const obj2 = native;
      const theme = obj2.useThemeContext().theme;
      if (cResult[0] === fn) {
        let tmp2;
        if (cResult[1] === theme) {
          tmp2 = cResult[2];
        }
        return tmp2;
      }
      const tmp3 = fn(theme);
      cResult[0] = fn;
      cResult[1] = theme;
      cResult[2] = tmp3;
      tmp2 = tmp3;
    }
  : (fn) => {
      const obj = native;
      return fn(obj.useThemeContext().theme);
    };
const result = size.fileFinishedImporting("design/components/Illustration/native/index.tsx");

export const getIllustrationSource = function getIllustrationSource(theme, light) {
  let lightResult;
  if (theme === ThemeTypes.LIGHT) {
    light = light.light;
  } else if (theme === ThemeTypes.DARK) {
    let midnight = light.darker;
    if (midnight == null) {
      midnight = light.midnight;
    }
    light = midnight;
  } else if (theme === ThemeTypes.ONYX) {
    let darker = light.midnight;
    if (darker == null) {
      darker = light.darker;
    }
    light = darker;
  }
  if (null != light) {
    lightResult = light();
  } else {
    lightResult = light.dark();
  }
  return lightResult;
};
export const useIllustrationSource = tmp2;
