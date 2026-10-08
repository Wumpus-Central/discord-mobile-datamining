// === Module 17374: Pending ===

// Module 17374 (Pending)
import c from "c" /* 576 */;
import shared from "shared" /* 4929 */;
import _mod8335 from "module_8335" /* 8335 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingSource() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_17375");
        },
      darker() {
          return require("module_17376");
        },
      light() {
          return require("module_17377");
        }
    };
    const illustrationSource = _mod8335.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8335;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function usePendingSource() {
  const obj = shared;
  return _mod8335.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17375");
    },
    darker() {
      return require("module_17376");
    },
    light() {
      return require("module_17377");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getPendingSource(theme) {
  return _mod8335.getIllustrationSource(theme, {
    dark() {
      return require("module_17375");
    },
    darker() {
      return require("module_17376");
    },
    light() {
      return require("module_17377");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export { getPendingSource };
export const usePendingSource = tmp3;
export const Pending = ReactCompilerGating.isReactCompilerEnabled() ? (function Pending(arg0) {
  const cResult = c.c(3);
  const tmp2 = closure_4();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.source = tmp2;
  const tmp5 = <Image />;
  cResult[0] = arg0;
  cResult[1] = tmp2;
  cResult[2] = tmp5;
  tmp3 = tmp5;
}) : (function Pending(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.source = closure_4();
  return <Image />;
});