// === Module 14501: Tier048Px ===

// Module 14501 (Tier048Px)
import c from "c" /* 576 */;
import shared from "shared" /* 5028 */;
import FastImageDefault from "FastImage" /* 5091 */;
import _mod8586 from "module_8586" /* 8586 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTier048PxSource() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_14502");
        },
      darker() {
          return require("module_14503");
        },
      light() {
          return require("module_14504");
        }
    };
    const illustrationSource = _mod8586.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8586;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useTier048PxSource() {
  const obj = shared;
  return _mod8586.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14502");
    },
    darker() {
      return require("module_14503");
    },
    light() {
      return require("module_14504");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getTier048PxSource(theme) {
  return _mod8586.getIllustrationSource(theme, {
    dark() {
      return require("module_14502");
    },
    darker() {
      return require("module_14503");
    },
    light() {
      return require("module_14504");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export { getTier048PxSource };
export const useTier048PxSource = tmp3;
export const Tier048Px = ReactCompilerGating.isReactCompilerEnabled() ? (function Tier048Px(arg0) {
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
}) : (function Tier048Px(arg0) {
  const obj = {};
  const tmp = closure_4();
  const merged = Object.assign(arg0);
  obj.source = tmp;
  return jsx(FastImageDefault, {});
});