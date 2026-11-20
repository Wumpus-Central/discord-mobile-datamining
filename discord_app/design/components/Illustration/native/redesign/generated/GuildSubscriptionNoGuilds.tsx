// === Module 14019: GuildSubscriptionNoGuilds ===

// Module 14019 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 4801 */;
import FastImageDefault from "FastImage" /* 5481 */;
import _mod7666 from "module_7666" /* 7666 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export function getGuildSubscriptionNoGuildsSource(theme) {
  return _mod7666.getIllustrationSource(theme, {
    dark() {
      return require("module_14020");
    },
    darker() {
      return require("module_14021");
    },
    light() {
      return require("module_14022");
    }
  });
}
export function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  return _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14020");
    },
    darker() {
      return require("module_14021");
    },
    light() {
      return require("module_14022");
    }
  });
}
export function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const illustrationSource = _mod7666.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14020");
    },
    darker() {
      return require("module_14021");
    },
    light() {
      return require("module_14022");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_14020");
    },
    darker() {
      return require("module_14021");
    },
    light() {
      return require("module_14022");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}