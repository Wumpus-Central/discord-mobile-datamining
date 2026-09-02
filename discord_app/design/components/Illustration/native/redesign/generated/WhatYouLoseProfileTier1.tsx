// === Module 13218: getWhatYouLoseProfileTier1Source ===

// Module 13218 (getWhatYouLoseProfileTier1Source)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8926 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13219);
    },
    darker() {
      return callback(13220);
    },
    light() {
      return callback(13221);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13219);
    },
    darker() {
      return callback(13220);
    },
    light() {
      return callback(13221);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13219);
    },
    darker() {
      return callback(13220);
    },
    light() {
      return callback(13221);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};