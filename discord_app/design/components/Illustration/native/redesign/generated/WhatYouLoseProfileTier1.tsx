// === Module 15261: WhatYouLoseProfileTier1 ===

// Module 15261 (WhatYouLoseProfileTier1)
import shared from "shared" /* 5021 */;
import FastImageDefault from "FastImage" /* 5717 */;
import _mod8806 from "module_8806" /* 8806 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export function getWhatYouLoseProfileTier1Source(theme) {
  return _mod8806.getIllustrationSource(theme, {
    dark() {
      return require("module_15262");
    },
    darker() {
      return require("module_15263");
    },
    light() {
      return require("module_15264");
    }
  });
}
export function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod8806.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15262");
    },
    darker() {
      return require("module_15263");
    },
    light() {
      return require("module_15264");
    }
  });
}
export function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const illustrationSource = _mod8806.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15262");
    },
    darker() {
      return require("module_15263");
    },
    light() {
      return require("module_15264");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_15262");
    },
    darker() {
      return require("module_15263");
    },
    light() {
      return require("module_15264");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}