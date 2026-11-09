// === Module 15708: GuildSubscriptionNoGuilds ===

// Module 15708 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 5147 */;
import FastImageDefault from "FastImage" /* 5842 */;
import _mod8880 from "module_8880" /* 8880 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export function getGuildSubscriptionNoGuildsSource(theme) {
  return _mod8880.getIllustrationSource(theme, {
    dark() {
      return require("module_15709");
    },
    darker() {
      return require("module_15710");
    },
    light() {
      return require("module_15711");
    }
  });
}
export function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  return _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15709");
    },
    darker() {
      return require("module_15710");
    },
    light() {
      return require("module_15711");
    }
  });
}
export function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const illustrationSource = _mod8880.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15709");
    },
    darker() {
      return require("module_15710");
    },
    light() {
      return require("module_15711");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_15709");
    },
    darker() {
      return require("module_15710");
    },
    light() {
      return require("module_15711");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}