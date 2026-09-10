// === Module 13609: GuildSubscriptionNoGuilds ===

// Module 13609 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  const obj = {
    dark() {
      return require("module_13610");
    },
    darker() {
      return require("module_13611");
    },
    light() {
      return require("module_13612");
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  const obj = {
    dark() {
      return require("module_13610");
    },
    darker() {
      return require("module_13611");
    },
    light() {
      return require("module_13612");
    }
  };
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  let obj = {
    dark() {
      return require("module_13610");
    },
    darker() {
      return require("module_13611");
    },
    light() {
      return require("module_13612");
    }
  };
  obj = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};