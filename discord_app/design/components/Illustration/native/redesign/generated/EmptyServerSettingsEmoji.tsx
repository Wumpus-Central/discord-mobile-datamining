// === Module 16883: getEmptyServerSettingsEmojiSource ===

// Module 16883 (getEmptyServerSettingsEmojiSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7946 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(16884);
    },
    darker() {
      return callback(16885);
    },
    light() {
      return callback(16886);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16884);
    },
    darker() {
      return callback(16885);
    },
    light() {
      return callback(16886);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(16884);
    },
    darker() {
      return callback(16885);
    },
    light() {
      return callback(16886);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};