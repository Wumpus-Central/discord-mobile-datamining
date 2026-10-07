// === Module 13327: SubscriptionPlaceholderPattern ===

// Module 13327 (SubscriptionPlaceholderPattern)
import c from "c" /* 576 */;
import shared from "shared" /* 4735 */;
import _mod7916 from "module_7916" /* 7916 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_13328");
        },
      darker() {
          return require("module_13329");
        },
      light() {
          return require("module_13330");
        }
    };
    const illustrationSource = _mod7916.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod7916;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const obj = shared;
  return _mod7916.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13328");
    },
    darker() {
      return require("module_13329");
    },
    light() {
      return require("module_13330");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod7916.getIllustrationSource(theme, {
    dark() {
      return require("module_13328");
    },
    darker() {
      return require("module_13329");
    },
    light() {
      return require("module_13330");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export { getSubscriptionPlaceholderPatternSource };
export const useSubscriptionPlaceholderPatternSource = tmp3;
export const SubscriptionPlaceholderPattern = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.source = closure_4();
  return <Image />;
});