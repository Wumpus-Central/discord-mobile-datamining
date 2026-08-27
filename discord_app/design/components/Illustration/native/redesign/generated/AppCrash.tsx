// === Module 9860: getAppCrashSource ===

// Module 9860 (getAppCrashSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8834 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9861);
    },
    darker() {
      return callback(9862);
    },
    light() {
      return callback(9863);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9861);
    },
    darker() {
      return callback(9862);
    },
    light() {
      return callback(9863);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9861);
    },
    darker() {
      return callback(9862);
    },
    light() {
      return callback(9863);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};