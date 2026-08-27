// === Module 17166: getChannelSetupSource ===

// Module 17166 (getChannelSetupSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 8834 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17167);
    },
    darker() {
      return callback(17168);
    },
    light() {
      return callback(17169);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useChannelSetupSource = function useChannelSetupSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17167);
    },
    darker() {
      return callback(17168);
    },
    light() {
      return callback(17169);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const ChannelSetup = function ChannelSetup(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17167);
    },
    darker() {
      return callback(17168);
    },
    light() {
      return callback(17169);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};