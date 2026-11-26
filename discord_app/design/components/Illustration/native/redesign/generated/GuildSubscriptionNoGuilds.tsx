// === Module 13994: GuildSubscriptionNoGuilds ===

// Module 13994 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 5050 */;
import FastImageDefault from "FastImage" /* 5730 */;
import _mod8566 from "module_8566" /* 8566 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export function getGuildSubscriptionNoGuildsSource(theme) {
  return _mod8566.getIllustrationSource(theme, {
    dark() {
      return require("module_13995");
    },
    darker() {
      return require("module_13996");
    },
    light() {
      return require("module_13997");
    }
  });
}
export function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  return _mod8566.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13995");
    },
    darker() {
      return require("module_13996");
    },
    light() {
      return require("module_13997");
    }
  });
}
export function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const illustrationSource = _mod8566.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13995");
    },
    darker() {
      return require("module_13996");
    },
    light() {
      return require("module_13997");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_13995");
    },
    darker() {
      return require("module_13996");
    },
    light() {
      return require("module_13997");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}