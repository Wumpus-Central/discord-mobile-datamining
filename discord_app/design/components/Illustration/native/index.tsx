// discord_app/design/components/Illustration/native/index.tsx
import c from "../../../../../_runtime/00576_c.js";
import Constants from "../../../../Constants.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("design/components/Illustration/native/index.tsx");

export const getIllustrationSource = function getIllustrationSource(theme, light) {
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
    let lightResult = light();
  } else {
    lightResult = light.dark();
  }
  return lightResult;
};
export const useIllustrationSource = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIllustrationSource(fn) {
      const cResult = c.c(3);
      const theme = native.useThemeContext().theme;
      if (cResult[0] === fn) {
        if (cResult[1] === theme) {
          let tmp2 = cResult[2];
        }
        return tmp2;
      }
      const tmp3 = fn(theme);
      cResult[0] = fn;
      cResult[1] = theme;
      cResult[2] = tmp3;
      tmp2 = tmp3;
    }
  : function useIllustrationSource(fn) {
      return fn(native.useThemeContext().theme);
    };
