// === Module 16314: getPendingSource ===

// Module 16314 (getPendingSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7834 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16315);
    },
    darker() {
      return callback(16316);
    },
    light() {
      return callback(16317);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const usePendingSource = function usePendingSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16315);
    },
    darker() {
      return callback(16316);
    },
    light() {
      return callback(16317);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Pending = function Pending(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16315);
    },
    darker() {
      return callback(16316);
    },
    light() {
      return callback(16317);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};