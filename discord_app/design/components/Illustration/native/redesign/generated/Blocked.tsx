// === Module 14257: getBlockedSource ===

// Module 14257 (getBlockedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(14258);
    },
    darker() {
      return callback(14259);
    },
    light() {
      return callback(14260);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useBlockedSource = function useBlockedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14258);
    },
    darker() {
      return callback(14259);
    },
    light() {
      return callback(14260);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const Blocked = function Blocked(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(14258);
    },
    darker() {
      return callback(14259);
    },
    light() {
      return callback(14260);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};