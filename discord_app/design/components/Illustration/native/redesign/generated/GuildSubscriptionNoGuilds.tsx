// discord_app/design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { AccessibilityAnnouncer } from "../../../../../shared.tsx";
import { getIllustrationSource } from "../../index.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = getIllustrationSource /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(12710);
    },
    darker() {
      return callback(12711);
    },
    light() {
      return callback(12712);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12710);
    },
    darker() {
      return callback(12711);
    },
    light() {
      return callback(12712);
    }
  };
  return getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(12710);
    },
    darker() {
      return callback(12711);
    },
    light() {
      return callback(12712);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};