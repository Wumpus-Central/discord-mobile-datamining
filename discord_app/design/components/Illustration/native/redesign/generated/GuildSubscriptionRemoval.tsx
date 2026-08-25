// === Module 13093: getGuildSubscriptionRemovalSource ===

// Module 13093 (getGuildSubscriptionRemovalSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7767 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13094);
    },
    darker() {
      return callback(13095);
    },
    light() {
      return callback(13096);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13094);
    },
    darker() {
      return callback(13095);
    },
    light() {
      return callback(13096);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13094);
    },
    darker() {
      return callback(13095);
    },
    light() {
      return callback(13096);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};