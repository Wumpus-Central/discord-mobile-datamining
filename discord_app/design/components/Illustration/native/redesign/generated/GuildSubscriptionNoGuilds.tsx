// === Module 15406: GuildSubscriptionNoGuilds ===

// Module 15406 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 5313 */;
import FastImageDefault from "FastImage" /* 6020 */;
import _mod8183 from "module_8183" /* 8183 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export function getGuildSubscriptionNoGuildsSource(theme) {
  return _mod8183.getIllustrationSource(theme, {
    dark() {
      return require("module_15407");
    },
    darker() {
      return require("module_15408");
    },
    light() {
      return require("module_15409");
    }
  });
}
export function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  return _mod8183.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15407");
    },
    darker() {
      return require("module_15408");
    },
    light() {
      return require("module_15409");
    }
  });
}
export function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const illustrationSource = _mod8183.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15407");
    },
    darker() {
      return require("module_15408");
    },
    light() {
      return require("module_15409");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_15407");
    },
    darker() {
      return require("module_15408");
    },
    light() {
      return require("module_15409");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}