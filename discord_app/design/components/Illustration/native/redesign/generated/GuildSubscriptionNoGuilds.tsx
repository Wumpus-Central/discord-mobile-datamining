// === Module 13560: GuildSubscriptionNoGuilds ===

// Module 13560 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  const obj = {
    dark() {
      return require("module_13561");
    },
    darker() {
      return require("module_13562");
    },
    light() {
      return require("module_13563");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  const obj = {
    dark() {
      return require("module_13561");
    },
    darker() {
      return require("module_13562");
    },
    light() {
      return require("module_13563");
    }
  };
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = {
    dark() {
      return require("module_13561");
    },
    darker() {
      return require("module_13562");
    },
    light() {
      return require("module_13563");
    }
  };
  obj = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};