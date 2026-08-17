// discord_app/design/components/Illustration/native/redesign/generated/InvalidLink.tsx
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7907 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(10661);
    },
    darker() {
      return callback(10976);
    },
    light() {
      return callback(10662);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10661);
    },
    darker() {
      return callback(10976);
    },
    light() {
      return callback(10662);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const InvalidLink = function InvalidLink(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(10661);
    },
    darker() {
      return callback(10976);
    },
    light() {
      return callback(10662);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};