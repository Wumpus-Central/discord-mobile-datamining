// === Module 13586: GuildSubscriptionNoGuilds ===

// Module 13586 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  const obj = {
    dark() {
      return require("module_13587");
    },
    darker() {
      return require("module_13588");
    },
    light() {
      return require("module_13589");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  const obj = {
    dark() {
      return require("module_13587");
    },
    darker() {
      return require("module_13588");
    },
    light() {
      return require("module_13589");
    }
  };
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = {
    dark() {
      return require("module_13587");
    },
    darker() {
      return require("module_13588");
    },
    light() {
      return require("module_13589");
    }
  };
  obj = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};