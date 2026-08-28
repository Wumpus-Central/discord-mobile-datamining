// === Module 17172: getIntroHeaderSource ===

// Module 17172 (getIntroHeaderSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8851 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/IntroHeader.tsx");

export const getIntroHeaderSource = function getIntroHeaderSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17173);
    },
    darker() {
      return callback(17174);
    },
    light() {
      return callback(17175);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useIntroHeaderSource = function useIntroHeaderSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17173);
    },
    darker() {
      return callback(17174);
    },
    light() {
      return callback(17175);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const IntroHeader = function IntroHeader(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17173);
    },
    darker() {
      return callback(17174);
    },
    light() {
      return callback(17175);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};