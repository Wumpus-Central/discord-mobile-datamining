// === Module 7916: ? ===

// Module 7916
import c from "c" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 4595 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
export const useIllustrationSource = ReactCompilerGating.isReactCompilerEnabled() ? ((fn) => {
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
}) : ((fn) => fn(native.useThemeContext().theme));