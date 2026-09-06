// === Module 13335: WhatYouLoseProfileTier1 ===

// Module 13335 (WhatYouLoseProfileTier1)
import shared from "shared" /* 4411 */;
import _mod8233 from "module_8233" /* 8233 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  const obj = {
    dark() {
      return require("module_13336");
    },
    darker() {
      return require("module_13337");
    },
    light() {
      return require("module_13338");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  const obj = {
    dark() {
      return require("module_13336");
    },
    darker() {
      return require("module_13337");
    },
    light() {
      return require("module_13338");
    }
  };
  return _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  let obj = {
    dark() {
      return require("module_13336");
    },
    darker() {
      return require("module_13337");
    },
    light() {
      return require("module_13338");
    }
  };
  obj = {};
  const illustrationSource = _mod8233.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};