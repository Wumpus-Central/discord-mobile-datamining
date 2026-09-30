// === Module 13114: WhatYouLoseProfileTier1 ===

// Module 13114 (WhatYouLoseProfileTier1)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_13115");
    },
    darker() {
      return require("module_13116");
    },
    light() {
      return require("module_13117");
    }
  });
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13115");
    },
    darker() {
      return require("module_13116");
    },
    light() {
      return require("module_13117");
    }
  });
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13115");
    },
    darker() {
      return require("module_13116");
    },
    light() {
      return require("module_13117");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};