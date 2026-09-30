// === Module 13269: GuildSubscriptionNoGuilds ===

// Module 13269 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_13270");
    },
    darker() {
      return require("module_13271");
    },
    light() {
      return require("module_13272");
    }
  });
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13270");
    },
    darker() {
      return require("module_13271");
    },
    light() {
      return require("module_13272");
    }
  });
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13270");
    },
    darker() {
      return require("module_13271");
    },
    light() {
      return require("module_13272");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};