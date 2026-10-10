// === Module 8358: generated/NoResults ===

// Module 8358 (generated/NoResults)
import c from "c" /* 576 */;
import shared from "shared" /* 4969 */;
import _mod8359 from "module_8359" /* 8359 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNoResultsSource() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_8360");
        },
      darker() {
          return require("module_8361");
        },
      light() {
          return require("module_8362");
        }
    };
    const illustrationSource = _mod8359.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8359;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useNoResultsSource() {
  const obj = shared;
  return _mod8359.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8360");
    },
    darker() {
      return require("module_8361");
    },
    light() {
      return require("module_8362");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getNoResultsSource(theme) {
  return _mod8359.getIllustrationSource(theme, {
    dark() {
      return require("module_8360");
    },
    darker() {
      return require("module_8361");
    },
    light() {
      return require("module_8362");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export { getNoResultsSource };
export const useNoResultsSource = tmp3;
export const NoResults = ReactCompilerGating.isReactCompilerEnabled() ? (function NoResults(arg0) {
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
}) : (function NoResults(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.source = closure_4();
  return <Image />;
});