// discord_app/design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  let obj = require(6541) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16427);
    },
    darker() {
      return callback(16428);
    },
    light() {
      return callback(16429);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16427);
    },
    darker() {
      return callback(16428);
    },
    light() {
      return callback(16429);
    }
  };
  return require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = require(4039) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16427);
    },
    darker() {
      return callback(16428);
    },
    light() {
      return callback(16429);
    }
  };
  obj = {};
  const illustrationSource = require(6541) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};