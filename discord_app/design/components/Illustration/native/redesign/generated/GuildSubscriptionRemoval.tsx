// discord_app/design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(12974);
    },
    darker() {
      return callback(12975);
    },
    light() {
      return callback(12976);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12974);
    },
    darker() {
      return callback(12975);
    },
    light() {
      return callback(12976);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(12974);
    },
    darker() {
      return callback(12975);
    },
    light() {
      return callback(12976);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};