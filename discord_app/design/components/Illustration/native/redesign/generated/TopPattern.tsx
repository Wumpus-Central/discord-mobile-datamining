// === Module 15088: TopPattern ===

// Module 15088 (TopPattern)
import c from "c" /* 576 */;
import shared from "shared" /* 5011 */;
import FastImageDefault from "FastImage" /* 5705 */;
import _mod8761 from "module_8761" /* 8761 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTopPatternSource() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_15089");
        },
      darker() {
          return require("module_15090");
        },
      light() {
          return require("module_15091");
        }
    };
    const illustrationSource = _mod8761.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8761;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useTopPatternSource() {
  const obj = shared;
  return _mod8761.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15089");
    },
    darker() {
      return require("module_15090");
    },
    light() {
      return require("module_15091");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getTopPatternSource(theme) {
  return _mod8761.getIllustrationSource(theme, {
    dark() {
      return require("module_15089");
    },
    darker() {
      return require("module_15090");
    },
    light() {
      return require("module_15091");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export { getTopPatternSource };
export const useTopPatternSource = tmp3;
export const TopPattern = ReactCompilerGating.isReactCompilerEnabled() ? (function TopPattern(arg0) {
  const cResult = c.c(3);
  const tmp3 = closure_4();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp3) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.source = tmp3;
  const tmp7 = jsx(FastImageDefault, {});
  cResult[0] = arg0;
  cResult[1] = tmp3;
  cResult[2] = tmp7;
  tmp4 = tmp7;
}) : (function TopPattern(arg0) {
  const obj = {};
  const tmp = closure_4();
  const merged = Object.assign(arg0);
  obj.source = tmp;
  return jsx(FastImageDefault, {});
});