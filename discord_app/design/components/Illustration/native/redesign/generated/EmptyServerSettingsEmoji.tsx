// === Module 19068: EmptyServerSettingsEmoji ===

// Module 19068 (EmptyServerSettingsEmoji)
import c from "c" /* 576 */;
import shared from "shared" /* 4978 */;
import FastImageDefault from "FastImage" /* 5669 */;
import _mod8724 from "module_8724" /* 8724 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmptyServerSettingsEmojiSource() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_19069");
        },
      darker() {
          return require("module_19070");
        },
      light() {
          return require("module_19071");
        }
    };
    const illustrationSource = _mod8724.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8724;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod8724.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_19069");
    },
    darker() {
      return require("module_19070");
    },
    light() {
      return require("module_19071");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8724.getIllustrationSource(theme, {
    dark() {
      return require("module_19069");
    },
    darker() {
      return require("module_19070");
    },
    light() {
      return require("module_19071");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export { getEmptyServerSettingsEmojiSource };
export const useEmptyServerSettingsEmojiSource = tmp3;
export const EmptyServerSettingsEmoji = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyServerSettingsEmoji(arg0) {
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
}) : (function EmptyServerSettingsEmoji(arg0) {
  const obj = {};
  const tmp = closure_4();
  const merged = Object.assign(arg0);
  obj.source = tmp;
  return jsx(FastImageDefault, {});
});