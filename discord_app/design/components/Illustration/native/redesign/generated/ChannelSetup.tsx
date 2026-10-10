// === Module 18412: ChannelSetup ===

// Module 18412 (ChannelSetup)
import c from "c" /* 576 */;
import shared from "shared" /* 4969 */;
import _mod8359 from "module_8359" /* 8359 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelSetupSource() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_18413");
        },
      darker() {
          return require("module_18414");
        },
      light() {
          return require("module_18415");
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
}) : (function useChannelSetupSource() {
  const obj = shared;
  return _mod8359.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18413");
    },
    darker() {
      return require("module_18414");
    },
    light() {
      return require("module_18415");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getChannelSetupSource(theme) {
  return _mod8359.getIllustrationSource(theme, {
    dark() {
      return require("module_18413");
    },
    darker() {
      return require("module_18414");
    },
    light() {
      return require("module_18415");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export { getChannelSetupSource };
export const useChannelSetupSource = tmp3;
export const ChannelSetup = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelSetup(arg0) {
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
}) : (function ChannelSetup(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.source = closure_4();
  return <Image />;
});