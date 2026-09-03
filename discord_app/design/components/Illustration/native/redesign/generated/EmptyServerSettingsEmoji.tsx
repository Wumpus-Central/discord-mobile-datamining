// === Module 17409: getEmptyServerSettingsEmojiSource ===

// Module 17409 (getEmptyServerSettingsEmojiSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8930 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17410);
    },
    darker() {
      return callback(17411);
    },
    light() {
      return callback(17412);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17410);
    },
    darker() {
      return callback(17411);
    },
    light() {
      return callback(17412);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17410);
    },
    darker() {
      return callback(17411);
    },
    light() {
      return callback(17412);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};