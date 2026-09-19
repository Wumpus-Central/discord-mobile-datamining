// === Module 13791: GuildSubscriptionNoGuilds ===

// Module 13791 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 4607 */;
import _mod8501 from "module_8501" /* 8501 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("module_13792");
    },
    darker() {
      return require("module_13793");
    },
    light() {
      return require("module_13794");
    }
  });
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13792");
    },
    darker() {
      return require("module_13793");
    },
    light() {
      return require("module_13794");
    }
  });
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13792");
    },
    darker() {
      return require("module_13793");
    },
    light() {
      return require("module_13794");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};