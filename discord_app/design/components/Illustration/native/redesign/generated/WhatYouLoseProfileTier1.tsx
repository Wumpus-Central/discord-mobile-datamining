// === Module 13594: WhatYouLoseProfileTier1 ===

// Module 13594 (WhatYouLoseProfileTier1)
import c from "c" /* 576 */;
import shared from "shared" /* 4930 */;
import _mod8343 from "module_8343" /* 8343 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useWhatYouLoseProfileTier1Source() {
  const cResult = c.c(2);
  const theme = shared.useThemeContext().theme;
  if (cResult[0] !== theme) {
    const obj3 = {
      dark() {
          return require("module_13595");
        },
      darker() {
          return require("module_13596");
        },
      light() {
          return require("module_13597");
        }
    };
    const illustrationSource = _mod8343.getIllustrationSource(theme, obj3);
    cResult[0] = theme;
    cResult[1] = illustrationSource;
    let tmp4 = illustrationSource;
    const tmpResult = _mod8343;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod8343.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13595");
    },
    darker() {
      return require("module_13596");
    },
    light() {
      return require("module_13597");
    }
  });
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
function getWhatYouLoseProfileTier1Source(theme) {
  return _mod8343.getIllustrationSource(theme, {
    dark() {
      return require("module_13595");
    },
    darker() {
      return require("module_13596");
    },
    light() {
      return require("module_13597");
    }
  });
}
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export { getWhatYouLoseProfileTier1Source };
export const useWhatYouLoseProfileTier1Source = tmp3;
export const WhatYouLoseProfileTier1 = ReactCompilerGating.isReactCompilerEnabled() ? (function WhatYouLoseProfileTier1(arg0) {
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
}) : (function WhatYouLoseProfileTier1(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.source = closure_4();
  return <Image />;
});