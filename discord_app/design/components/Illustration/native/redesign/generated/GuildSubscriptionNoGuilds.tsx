// discord_app/design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  let obj = require("../../index.tsx") /* getIllustrationSource */;
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
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
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
  return require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = require("../../../../../shared.tsx") /* AccessibilityAnnouncer */;
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
  const illustrationSource = require("../../index.tsx") /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};