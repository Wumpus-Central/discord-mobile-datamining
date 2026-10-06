// === Module 7916: ? ===

// Module 7916
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 4595 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((fn) => {
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
}) : ((fn) => {
  const obj = native;
  return fn(obj.useThemeContext().theme);
});
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