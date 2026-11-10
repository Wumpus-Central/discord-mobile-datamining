// === Module 15825: GuildSubscriptionRemoval ===

// Module 15825 (GuildSubscriptionRemoval)
import shared from "shared" /* 5149 */;
import FastImageDefault from "FastImage" /* 5844 */;
import _mod8886 from "module_8886" /* 8886 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export function getGuildSubscriptionRemovalSource(theme) {
  return _mod8886.getIllustrationSource(theme, {
    dark() {
      return require("module_15826");
    },
    darker() {
      return require("module_15827");
    },
    light() {
      return require("module_15828");
    }
  });
}
export function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15826");
    },
    darker() {
      return require("module_15827");
    },
    light() {
      return require("module_15828");
    }
  });
}
export function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const illustrationSource = _mod8886.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15826");
    },
    darker() {
      return require("module_15827");
    },
    light() {
      return require("module_15828");
    }
  });
  const obj4 = {};
  const obj3 = {
    dark() {
      return require("module_15826");
    },
    darker() {
      return require("module_15827");
    },
    light() {
      return require("module_15828");
    }
  };
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return jsx(FastImageDefault, {});
}