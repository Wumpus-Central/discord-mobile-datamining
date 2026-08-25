// === Module 11180: getFeedbackModalSadDesaturatedSource ===

// Module 11180 (getFeedbackModalSadDesaturatedSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(11181);
    },
    darker() {
      return callback(11182);
    },
    light() {
      return callback(11183);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11181);
    },
    darker() {
      return callback(11182);
    },
    light() {
      return callback(11183);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(11181);
    },
    darker() {
      return callback(11182);
    },
    light() {
      return callback(11183);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};