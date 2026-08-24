// === Module 12939: getTier048PxSource ===

// Module 12939 (getTier048PxSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7907 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12940);
    },
    darker() {
      return callback(12941);
    },
    light() {
      return callback(12942);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useTier048PxSource = function useTier048PxSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12940);
    },
    darker() {
      return callback(12941);
    },
    light() {
      return callback(12942);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Tier048Px = function Tier048Px(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12940);
    },
    darker() {
      return callback(12941);
    },
    light() {
      return callback(12942);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};