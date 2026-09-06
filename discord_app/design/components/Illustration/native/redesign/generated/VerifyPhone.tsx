// === Module 17510: getVerifyPhoneSource ===

// Module 17510 (getVerifyPhoneSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import getIllustrationSource from "getIllustrationSource" /* 8233 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/VerifyPhone.tsx");

export const getVerifyPhoneSource = function getVerifyPhoneSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17511);
    },
    darker() {
      return callback(17512);
    },
    light() {
      return callback(17513);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useVerifyPhoneSource = function useVerifyPhoneSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17511);
    },
    darker() {
      return callback(17512);
    },
    light() {
      return callback(17513);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const VerifyPhone = function VerifyPhone(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17511);
    },
    darker() {
      return callback(17512);
    },
    light() {
      return callback(17513);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};