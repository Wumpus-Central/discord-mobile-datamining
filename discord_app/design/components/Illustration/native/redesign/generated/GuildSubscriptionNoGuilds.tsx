// === Module 13242: GuildSubscriptionNoGuilds ===

// Module 13242 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 4685 */;
import _mod7844 from "module_7844" /* 7844 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  return _mod7844.getIllustrationSource(theme, {
    dark() {
      return require("module_13243");
    },
    darker() {
      return require("module_13244");
    },
    light() {
      return require("module_13245");
    }
  });
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  return _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13243");
    },
    darker() {
      return require("module_13244");
    },
    light() {
      return require("module_13245");
    }
  });
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7844.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13243");
    },
    darker() {
      return require("module_13244");
    },
    light() {
      return require("module_13245");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};