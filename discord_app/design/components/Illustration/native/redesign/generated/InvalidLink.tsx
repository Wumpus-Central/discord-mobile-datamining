// === Module 11428: getInvalidLinkSource ===

// Module 11428 (getInvalidLinkSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7834 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(10570);
    },
    darker() {
      return callback(11429);
    },
    light() {
      return callback(10571);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10570);
    },
    darker() {
      return callback(11429);
    },
    light() {
      return callback(10571);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10570);
    },
    darker() {
      return callback(11429);
    },
    light() {
      return callback(10571);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};