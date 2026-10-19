// === Module 9006: AppCrash ===

// Module 9006 (AppCrash)
import c from "c" /* 576 */;
import shared from "shared" /* 4952 */;
import FastImageDefault from "FastImage" /* 5631 */;
import _mod8649 from "module_8649" /* 8649 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppCrashSource() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_9007");
        },
      darker() {
          return require("module_9008");
        },
      light() {
          return require("module_9009");
        }
    };
    const illustrationSource = _mod8649.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8649;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useAppCrashSource() {
  const obj = shared;
  return _mod8649.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9007");
    },
    darker() {
      return require("module_9008");
    },
    light() {
      return require("module_9009");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getAppCrashSource(theme) {
  return _mod8649.getIllustrationSource(theme, {
    dark() {
      return require("module_9007");
    },
    darker() {
      return require("module_9008");
    },
    light() {
      return require("module_9009");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export { getAppCrashSource };
export const useAppCrashSource = tmp3;
export const AppCrash = ReactCompilerGating.isReactCompilerEnabled() ? (function AppCrash(arg0) {
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
}) : (function AppCrash(arg0) {
  const obj = {};
  const tmp = closure_4();
  const merged = Object.assign(arg0);
  obj.source = tmp;
  return jsx(FastImageDefault, {});
});