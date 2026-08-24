// === Module 8867: getNoResultsAltSource ===

// Module 8867 (getNoResultsAltSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7907 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(8868);
    },
    darker() {
      return callback(8869);
    },
    light() {
      return callback(8635);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(8868);
    },
    darker() {
      return callback(8869);
    },
    light() {
      return callback(8635);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(8868);
    },
    darker() {
      return callback(8869);
    },
    light() {
      return callback(8635);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};