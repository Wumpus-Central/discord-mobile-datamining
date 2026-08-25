// === Module 9230: getAppCrashSource ===

// Module 9230 (getAppCrashSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/AppCrash.tsx");

export const getAppCrashSource = function getAppCrashSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(9231);
    },
    darker() {
      return callback(9232);
    },
    light() {
      return callback(9233);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useAppCrashSource = function useAppCrashSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9231);
    },
    darker() {
      return callback(9232);
    },
    light() {
      return callback(9233);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const AppCrash = function AppCrash(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(9231);
    },
    darker() {
      return callback(9232);
    },
    light() {
      return callback(9233);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};