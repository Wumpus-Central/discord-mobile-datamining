// === Module 16082: GuildSubscriptionRemoval ===

// Module 16082 (GuildSubscriptionRemoval)
import shared from "shared" /* 5317 */;
import FastImageDefault from "FastImage" /* 6014 */;
import _mod8194 from "module_8194" /* 8194 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export function getGuildSubscriptionRemovalSource(theme) {
  return _mod8194.getIllustrationSource(theme, {
    dark() {
      return require("module_16083");
    },
    darker() {
      return require("module_16084");
    },
    light() {
      return require("module_16085");
    }
  });
}
export function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16083");
    },
    darker() {
      return require("module_16084");
    },
    light() {
      return require("module_16085");
    }
  });
}
export function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const illustrationSource = _mod8194.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16083");
    },
    darker() {
      return require("module_16084");
    },
    light() {
      return require("module_16085");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_16083");
    },
    darker() {
      return require("module_16084");
    },
    light() {
      return require("module_16085");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}